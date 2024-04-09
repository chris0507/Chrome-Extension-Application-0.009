const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const os = require("os");

const { PORT, SECRET_ACCESS_TOKEN } = require("./config/index.js");
const { connectSheet, doc } = require("./google/google.js");
const generateVerificationCode = require("./sendmail/generateVerificationCode.js");
const { sendEmail } = require("./sendmail/verificationTemplates.js");
const e = require("express");

const app = express();

app.use(cors());
app.disable("x-powered-by"); //Reduce fingerprinting
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
    expiresIn: "1h", // Token expiration time
  };
  return jwt.sign(payload, secretKey, options);
};

app.post("/register", async (req, res) => {
  const { username, dob, city, ethnicity, email, password } = req.body;
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const verifyCode = generateVerificationCode();

  for (let row of rows) {
    if (email == row.get("email")) {
      return res.status(404).json({
        status: "existed_email",
        data: [],
        message: "It seems you already have an account, please log in instead.",
      });
    }
  }

  await sheet.addRow({
    username: username,
    dob: dob,
    city: city,
    ethnicity: ethnicity,
    email: email,
    password: hashedPassword,
    code: verifyCode,
    status: 0,
  });

  const response = await sendEmail({ emailType: 3, email, verifyCode });
  if (response === true) return res.send("Successful Sent Email");
  else res.send("Wrong Sent Email");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  for (let row of rows) {
    if (email == row.get("email")) {
      const isPasswordValid = await bcrypt.compare(
        password,
        row.get("password")
      );

      if (!isPasswordValid) {
        return res.status(404).json({
          status: "wrongPassword",
          data: [],
          message: "Wrong password",
        });
      } else {
        const token = generateAccessJWT(email, ipAddresses);

        if (row.get("status") == 0) {
          const verifyCode = generateVerificationCode();
          const response = await sendEmail({
            emailType: 3,
            email,
            verifyCode,
          });

          row.assign({ code: verifyCode });
          await row.save();

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
    }
  }
  return res.status(404).json({
    status: "not-exist",
  });
});

app.post("/check-token", async (req, res) => {
  var token = req.body.token;
  var userType = req.body.userType;

  if (!token) {
    return res.status(404).json({
      status: "null_token",
      data: [],
      message: "Token does not exist",
    });
  }
  await jwt.verify(token, SECRET_ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      console.error("Token verification failed:", err.message);
    } else {
      if (decoded.email) {
        if (userType == "public") {
          return res.status(200).json({
            status: "public_verify_token",
            message: "Veritied token",
          });
        } else if (userType == "business") {
          return res.status(200).json({
            status: "business_verify_token",
            message: "Veritied token",
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
  var emailType;
  let sheet = {};

  if (sheetName == "public") {
    emailType = 1;
  } else if (sheetName == "business") {
    emailType = 2;
  }

  if (sheetName == "public") {
    sheet = doc.sheetsByIndex[0];
  } else if (sheetName == "business") {
    sheet = doc.sheetsByIndex[1];
  }

  const rows = await sheet.getRows();

  for (var row of rows) {
    if (email == row.get("email")) {
      if (confirmedVerifyCode == row.get("code")) {
        row.assign({ status: "1" });
        await row.save();
        const CEOname = row.get("CEOname");
        const CEOemail = row.get("CEOemail");

        const token = generateAccessJWT(email, ipAddresses);
        const response = await sendEmail({
          emailType,
          email,
          CEOemail,
          CEOname,
        });

        if (response === true) {
          if (emailType == 1) {
            return res.status(200).json({
              status: "verified",
              data: token,
              message: "Successful verified",
            });
          } else if (emailType == 2) {
            const brandName = row.get("brandName");
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
        } else res.send("Wrong Sent Email");
      } else {
        return res.status(200).json({
          status: "wrong-code",
          data: [],
          message: "Wrong Code",
        });
      }
    }
  }
});

//Business User
let business_logged_user = {
  email: "",
  password: "",
};

app.post("/business/login", async (req, res) => {
  const { email, password } = req.body;
  const businessSheet = doc.sheetsByIndex[1];
  const rows = await businessSheet.getRows();

  for (let row of rows) {
    if (email == row.get("email")) {
      const isPasswordValid = await bcrypt.compare(
        password,
        row.get("password")
      );

      if (!isPasswordValid) {
        return res.status(404).json({
          status: "wrongPassword",
          data: [],
          message: "Wrong password",
        });
      } else {
        const token = generateAccessJWT(email, ipAddresses);

        if (row.get("status") == 0) {
          const verifyCode = generateVerificationCode();
          const response = await sendEmail({
            emailType: 3,
            email,
            verifyCode,
          });

          row.assign({ code: verifyCode });
          await row.save();

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
    }
  }
  return res.status(404).json({
    status: "not-exist",
  });
});

app.post("/business/register", async (req, res) => {
  const {
    brandName,
    city,
    ethnicity,
    CEOname,
    CEOemail,
    companyID,
    businessURL,
    logo,
    email,
    password,
  } = req.body;
  const sheet = doc.sheetsByIndex[1];
  const rows = await sheet.getRows();
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const verifyCode = generateVerificationCode();

  for (let row of rows) {
    if (email == row.get("email")) {
      return res.status(404).json({
        status: "existed_email",
        data: [],
        message: "It seems you already have an account, please log in instead.",
      });
    }
  }

  await sheet.addRow({
    brandName: brandName,
    city: city,
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
  });
  const response = await sendEmail({ emailType: 3, email, verifyCode });
  if (response === true) return res.send("Successful Sent Email");
  else res.send("Wrong Sent Email");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
