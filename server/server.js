const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const os = require("os");
const multer = require("multer");
const path = require("path");
const upload = multer({ dest: "uploads/" });
const { mongooseConnection } = require("./config/db.js");
const User = require("./schemas/user.models.js");

const findRoot = require("find-root");

const { PORT, SECRET_ACCESS_TOKEN } = require("./config/index.js");
const { connectSheet, doc } = require("./google/google.js");
const generateVerificationCode = require("./sendmail/generateVerificationCode.js");
const { sendEmail } = require("./sendmail/verificationTemplates.js");
const e = require("express");

const app = express();

mongooseConnection();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.disable("x-powered-by"); //Reduce fingerprinting
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/uploads", express.static(path.join(findRoot(__dirname), "uploads")));

//CONNECT DATABASE
connectSheet();

const saltRounds = 10;

const networkInterfaces = os.networkInterfaces();

const ipAddresses = [];

Object.keys(networkInterfaces).forEach((interfaceName) => {
  networkInterfaces[interfaceName].forEach((iface) => {
    if (iface.family === "IPv4" && !iface.internal) {
      ipAddresses.push(iface.address);
    }
  });
});

const generateAccessJWT = (email, ipAddresses) => {
  const secretKey = SECRET_ACCESS_TOKEN;
  const payload = {
    email,
    ipAddresses,
  };
  const options = {
    expiresIn: "24h", // Token expiration time
  };
  return jwt.sign(payload, secretKey, options);
};

app.post('/updateUser', async(req, res)=>{
  const { city, ethicity, email, password} = req.body;
  const user = await User.findOne({email:email})
  if(!user){
    return res.status(404).json({
      status: "not-exist",
      data: [],
      message: "Email does not exist",
    });
  }
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  user.city = city;
  user.ethicity = ethicity;
  user.email = email;
  user.password = hashedPassword;
  await user.save();
  return res.status(200).json({
    status: "success",
    message: "Successfully updated user"
  });
})

app.post("/register", async (req, res) => {
  const { username, dob, city, ethnicity, email, password } = req.body;
  const user = await User.findOne({ email: email });
  console.log("user:", user);
  if (user) {
    return res.status(404).json({
      status: "existed_email",
      data: [],
      message: "It seems you already have an account, please log in instead.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const verifyCode = generateVerificationCode();

  const newUser = new User({
    username: username,
    dob: dob,
    city: city,
    ethnicity: ethnicity,
    email: email,
    password: hashedPassword,
    code: verifyCode,
    status: 0,
    role: "public",
  });

  newUser
    .save()
    .then(async (user) => {
      const response = await sendEmail({ emailType: 3, email, verifyCode });
      if (response === true) return res.send("Successful Sent Email");
      else res.send("Wrong Sent Email");
    })
    .catch((err) => {
      return res.send("Something went wrong!");
    });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({
      status: "not-exist",
      data: [],
      message: "Email does not exist",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(404).json({
      status: "wrongPassword",
      data: [],
      message: "Wrong password",
    });
  } else {
    const token = generateAccessJWT(email, ipAddresses);

    if (user.status == 0) {
      const verifyCode = generateVerificationCode();
      const response = await sendEmail({
        emailType: 3,
        email,
        verifyCode,
      });

      user.code = verifyCode;
      await user.save();

      if (response === true) {
        return res.status(200).json({
          status: "not-verify",
        });
      } else return res.send("Wrong Sent Email");
    }
    return res.status(200).json({
      status: "success",
      token: token,
      data: user,
      message: "Successfully login",
    });
  }
});

app.post("/verify-code", async (req, res) => {
  const { email, code, type } = req.body;
  const user = await User.findOne({ email: email, role: type });

  if (!user) {
    return res.status(404).json({
      status: "not-exist",
      data: [],
      message: "Email does not exist",
    });
  }

  if (code != user.code) {
    return res.status(404).json({
      status: "wrong-code",
      data: [],
      message: "Wrong Code",
    });
  } else {
    user.status = 1;
    await user.save();
    const token = generateAccessJWT(email, ipAddresses);
    return res.status(200).json({
      status: "verified",
      data: token,
      message: "Successful verified",
    });
  }
});

app.post("/reset-password", async (req, res) => {
  const { email, type, password } = req.body;
  const user = await User.findOne({email:email, role:type})
  if(!user){
    return res.status(404).json({
      status: "not-exist",
      data: [],
      message: "Email does not exist",
    });
  }
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  user.password = hashedPassword;
  await user.save();
  return res.status(200).json({
    status: "success",
    message: "Successfully reset password",
  });
});


app.post("/forgot-password", async (req, res) => {
  const { email, type } = req.body;

  const user = await User.findOne({ email: email, role: type });
  if (!user) {
    return res.status(404).json({
      status: "not-exist",
      message: "Email does not exist",
    });
  }

  const verifyCode = generateVerificationCode();
  const response = await sendEmail({
    emailType: 4,
    email,
    verifyCode,
  });

  user.code = verifyCode;
  await user.save();

  if (response === true) {
    return res.status(200).json({
      status: "success",
      message: "Successfully sent email",
    });
  } else return res.send("Wrong Sent Email");

});

app.post("/getUserDetails", async (req, res) => {
  //check token
  var token = req.body.token;
  if (!token) {
    return res.status(404).json({
      status: "null_token",
      data: [],
      message: "Token does not exist",
    });
  }
  //verify token with jwt and get user details
  jwt.verify(token, SECRET_ACCESS_TOKEN, async (err, decoded) => {
    if (err) {
      console.error("Token verification failed:", err.message);
    } else {
      const email = decoded.email;
      const user =  await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({
          status: "not-exist",
          data: [],
          message: "Email does not exist",
        });
      }
      return res.status(200).json({
        status: "success",
        data: user,
      });
    }
  });
});


app.post("/check-token", async (req, res) => {
  var token = req.body.token;
  var userType = req.body.userType;

  if (!token) {
    return res.status(500).json({
      status: "invalid_token",
      data: [],
      message: "Token does not exist",
    });
  }
  await jwt.verify(token, SECRET_ACCESS_TOKEN, async (err, decoded) => {
    if (err) {
      console.error("Token verification failed:", err.message);
      return res.status(500).json({
        status: "invalid_token",
        data: [],
        message: "invalid_token",
      });
    } else {
      if (decoded.email) {
        const user = await User.findOne({email:decoded.email})
        if (userType == "public") {
          return res.status(200).json({
            status: "public_verify_token",
            message: "Veritied token",
            data: user
          });
        } else if (userType == "business") {
          return res.status(200).json({
            status: "business_verify_token",
            message: "Veritied token",
            data: user
          });
        } else {
          return res.status(200).json({
            status: "wrong_userType",
            data: [],
            message: "Wrong user type",
          });
        }
      } else console.log("wrong");
    }
  });
});

app.post("/confirmed-account", async (req, res) => {
  const { sheetName, email, confirmedVerifyCode } = req.body;

  const user = await User.findOne({ email: email, role: sheetName });
  console.log("user:", user);
  if (!user) {
    return res.status(404).json({
      status: "not-exist",
      data: [],
      message: "Email does not exist",
    });
  }

  if (user.code != confirmedVerifyCode) {
    return res.status(404).json({
      status: "wrong-code",
      data: [],
      message: "Wrong Code",
    });
  } else {
    user.status = 1;
    await user.save();
    const token = generateAccessJWT(email, ipAddresses);
    if (sheetName == "public") {
      const response = await sendEmail({
        emailType: 1,
        email,
      });
      if (response === true) {
        return res.status(200).json({
          status: "verified",
          data: token,
          message: "Successful verified",
        });
      } else if (sheetName == "business") {
        const brandName = user.brandName;
        const response1 = await sendEmail({
          emailType: 0,
          email,
          brandName,
        });
        if (response1 === true) {
          return res.status(200).json({
            status: "business-verified",
            data: token,
            message: "Successful verified",
          });
        }
      }
    }
  }
});

app.post("/urls/add", async (req, res) => {
  try {
    const { url, email } = req.body;
    const sheet = doc.sheetsByIndex[2];

    //add url to sheet
    await sheet.addRow({
      url: url,
      email: "",
      created_at: new Date().toISOString().slice(0, 10),
    });

    const rows = await sheet.getRows();
    //get the rawdata of these rows
    const data = rows.map((row) => {
      return {
        url: row.get("url"),
        email: row.get("email"),
        created_at: row.get("created_at"),
      };
    });
    return res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

app.get("/urls", async (req, res) => {
  try {
    const sheet = doc.sheetsByIndex[2];
    const rows = await sheet.getRows();
    //get the rawdata of these rows
    const data = rows.map((row) => {
      return {
        url: row.get("url"),
        email: row.get("email"),
        created_at: row.get("created_at"),
      };
    });

    return res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

app.post("/urls/delete", async (req, res) => {
  try {
    const { url } = req.body;
    console.log("url:", url);
    const sheet = doc.sheetsByIndex[2];
    const rows = await sheet.getRows();
    let data = [];

    //delete url from sheet
    for (let row of rows) {
      if (url == row.get("url")) {
        await row.delete();
        const updatedRows = await sheet.getRows();
        data = updatedRows.map((row) => {
          return {
            url: row.get("url"),
            email: row.get("email"),
            created_at: row.get("created_at"),
          };
        });
        return res.status(200).json({
          status: "success",
          data: data,
        });
      }
    }
    return res.status(404).json({
      status: "not-exist",
      data: data,
      message: "URL does not exist",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

app.post("/business/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email, role: "business" });
  if (!user) {
    return res.status(404).json({
      status: "not-exist",
      data: [],
      message: "Email does not exist",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(404).json({
      status: "wrongPassword",
      data: [],
      message: "Wrong password",
    });
  } else {
    const token = generateAccessJWT(email, ipAddresses);

    if (user.status == 0) {
      const verifyCode = generateVerificationCode();
      const response = await sendEmail({
        emailType: 3,
        email,
        verifyCode,
      });

      user.code = verifyCode;
      await user.save();

      if (response === true) {
        return res.status(200).json({
          status: "not-verify",

        });
      } else return res.send("Wrong Sent Email");
    }

    return res.status(200).json({
      status: "success",
      data: token,
      message: "Successfully login",
    });
  }
});


app.post("/business/register", upload.single("logo"), async (req, res) => {
  const {
    brandName,
    city,
    country,
    ethnicity,
    CEOname,
    CEOemail,
    companyID,
    businessURL,
    email,
    password,
  } = req.body;
  const logo = req.file.path;
  const user = await User.findOne({email:email, role:"business"})
  if(user){
    return res.status(404).json({
      status: "existed_email",
      data: [],
      message: "It seems you already have an account, please log in instead.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const verifyCode = generateVerificationCode();

  await User.create({
    brandName: brandName,
    city: city,
    country:country,
    ethnicity: ethnicity,
    CEOname: CEOname,
    CEOemail: CEOemail,
    companyID: companyID,
    businessURL: businessURL,
    logo: logo,
    email: email,
    password: hashedPassword,
    code: verifyCode,
    status: 0,
    role:'business'
  });
  const response = await sendEmail({ emailType: 3, email, verifyCode });
  if (response === true) return res.send("Successful Sent Email");
  else res.send("Wrong Sent Email");
});

app.post("/addTile", async (req, res) => {
  const { url, row, col, email } = req.body;
 const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({
      status: "not-exist",
      data: [],
      message: "Email does not exist",
    });
  }
  user.urls.push({ url: url, row: row, col: col, date: new Date() });
  await user.save();
  return res.status(200).json({
    status: "success",
    message: "Successfully added tile",
    data: user,
  });
})

app.post("/removeURL", async (req, res) => {
  const { row, col, email } = req.body;
   await User.updateOne(
    { email: email },
    { $pull: { urls: { row: row, col: col } } }
  );
  const user = await User.findOne({ email: email })
  return res.status(200).json({
    status: "success",
    message: "Successfully removed URL",
    data: user,
  });
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
