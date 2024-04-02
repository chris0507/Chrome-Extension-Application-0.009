const { createTransport } = require("nodemailer");

/**
 * The transporter object used for sending emails.
 */

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  logger: true,
  debug: true,
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASSWORD,
  },
});

const createVerficiationMailContent = ({ email, verifyCode }) => ({
  from: process.env.MAILER_EMAIL,
  to: email,
  subject: "Verify your Email",
  html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background-color: #1A1A1A;
            min-height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
        }

        .container {
            width: 50%;
            border: 2px solid #2F2F2F;
            border-radius: 20px;
            background: linear-gradient(to bottom, #797A7D, #000000 35%);
            padding: 20px;
        }

        .header {
            display: flex;
            align-items: center;
            border-bottom: 2px solid #fff;
            padding-bottom: 10px;
        }

        .header img {
            width: 80px;
        }

        .header .text {
            color: #fff;
            font-size: 20px;
            margin-left: 10px;
        }

        .content {
            margin-top: 20px;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }

        .content .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #fff;
        }

        .content .message {
            font-size: 16px;
            margin-bottom: 10px;
            color: #fff;
        }

        .content .code {
            font-size: 24px;
            font-weight: bold;
            color: #fff;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="https://i.ibb.co/T11dRkZ/icon48.png" alt="0.009" width="80">
            <span class="text">0.009 Demo</span>
        </div>
        <div class="content">
            <div class="title">Verify your email address</div>
            <div class="message">You need to verify your email address to continue using your 0.009 chrome extension
                account. Enter the following code to verify your email address:</div>
            <div class="code">${verifyCode}</div>
        </div>
    </div>
</body>

</html>`,
});

const sendEmail = async ({ emailType, email, verifyCode = null }) => {
  try {
    if (emailType === 0) {
    } else if (emailType === 1) {
    } else if (emailType === 2) {
    } else if (emailType === 3) {
      const mailOptions = createVerficiationMailContent({ email, verifyCode });
      await transporter.sendMail(mailOptions),
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        };
    }
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = { sendEmail };
