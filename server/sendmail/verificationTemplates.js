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
    <link href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
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

<body style="
    font-family: 'Aleo', serif;
    background-color: #1A1A1A;
    padding: 5px;
    padding-top: 100px;
    padding-bottom: 100px;
    ">
    <div class="container" style="margin:auto">
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

const sendPublicUserMailContent = ({ email }) => ({
  from: process.env.MAILER_EMAIL,
  to: email,
  subject: "Sucessful registered",
  html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: "Aleo", serif;
            font-size: 14px;
            color: black;
        }

        .container {
            width: 70%;
            background-color: white;
            margin-left: auto;
            margin-right: auto;
        }

        .header {
            padding: 20px;
            padding-top: 20px;
            background-color: #02a7e1;
        }

        .logo-image {
            text-align: center;
        }

        .header img {
            width: 150px;
        }

        .header .text {
            color: #fff;
            font-size: 20px;
            margin-left: 10px;
        }

        .content {
            padding: 20px;
        }

        .text-white {
            color: white;
        }

        .mb-1 {
            margin-bottom: 1rem;
        }
        .mb-2 {
            margin-bottom: 2rem;
        }

        .flex {
            display: flex;
        }
        .flex-col {
            flex-direction: column;
        }

        .justify-center {
            justify-content: center;
        }
        .justify-space-between {
            justify-content: space-between;
        }

        .items-center {
            align-items: center;
        }

        .first-image {
            border-radius: 10px;
            margin-right: 3rem;
        }

        .second-image {
            border-radius: 10px;
            margin-left: 3rem;
            width: 50%;
            height: 400px;
        }

        .w-100 {
            width: 100%;
        }
        .w-50 {
            width: 50%;
        }
        .gap-3 {
            gap: 3rem;
        }
        .text-end {
            text-align: end;
        }
        .text-center {
            text-align: center;
        }
        .tutorial-button {
            background-color: #02a7e1;
            border: none;
            padding: 1rem;
            color: white;
            border-radius: 10px;
            transition: background-color 0.3s;
        }

        .bowl-button {
            background-color: black;
            border: none;
            padding: 1rem;
            color: white;
            border-radius: 10px;
            transition: background-color 0.3s;
        }

        .footer {
            border-top: 1px solid;
            padding: 20px;
        }
    </style>
</head>

<body style="background-color: antiquewhite !important; padding: 20px;">
    <div class="container">
        <div class="header">
            <div class="logo-image">
                <img src="https://i.ibb.co/T11dRkZ/icon48.png" alt="0.009">
            </div>
            <div>
                <span class="text-white">Hi Rupert Bloom,</span>
            </div>
        </div>
        <div class="content mb-2">
            <p class="mb-1">So you aren’t clueless after all? You’ve downloaded the 0.009 Chrome extension and registered your public account at stage 1 of development. I guess we have to be thank full to this accomplishment and celebrate your choice to join us on the journey to world domination today!! We are always on the lookout for new recruits; non finer than you my new comrade.
            </p>
            <p class="mb-2">I don’t expect you to act in the usual manner but I want you to know your place public user! My plan for world domination depends on your abilities and intuition to deduct what works for you and being able to realise your commitments to me.
            </p>
            <div class="flex mb-2">
                <img src="https://i.ibb.co/stwHMDn/Photoshoot-293.jpg" class="first-image w-50" alt="" />
                <div class="w-50" style="margin-top: auto; margin-bottom: auto;">
                    <p class=""><strong>"For my privacy, on this occasion, I'll go by the name Eliss, and much like most of you, I've also travelled a great distance to be here today. There isn’t much time to divulge too much into my details, if you want to know ask the sales man."</strong></p>
                    <div class="text-end">
                        <span><i>It's good you've joined too!</i></span>
                    </div>
                </div>
            </div>
            <div class="mb-2">
                <h3>What does this means for you?</h3>
                <p class="mb-1">Your instructions should you accept them, are to discover more of this world and adjust your opinion to reach my world domination. This chrome extension 0.009 has the potential to give me what I am looking for and I am glad you also think this is the way and soon my plans will be recognised by the hunters.</p>
                <p class="mb-1">With this privilege, you can now expect your choice to matter, to make decisions that keep you alive until our plans are fulfilled, stay healthy and in a community of like-minded individuals. It no longer matters if you can’t afford it, I’ll see to it that you have a coupon for what you need. You don’t have to wait so long as you sch | to keep it in your arms reach, and of course you can change your mind at any time.</p>
                <p>I don’t make promises I ONLY make demands, and this is an easy one. Make it count!</p>
            </div>
            <div class="flex">
                <div class="w-50 text-center" style="margin-top: auto; margin-bottom:auto">
                    <p style="font-size: 20px; margin-bottom: 1rem;"><strong>What’s next for the people’s choice application?</strong></p>
                    <p>The People's Choice application</p>
                    <p style="margin-bottom: 3rem;">Decide what you will add your favorite list and activate your account.</p>
                    <div style="margin-bottom: 40px">
                        <a href="#" class="tutorial-button mb-1" style="cursor: pointer; text-decoration: none; color: white;">View Demo tutorial</a>
                    </div>
                    <div style="">
                        <a href="#" class="bowl-button" style="cursor: pointer; text-decoration: none; color: white;">Visit Man WIth Bowl</a>
                    </div>
                </div>
                <img src="https://i.ibb.co/Cs4qrQb/Photoshoot-63.jpg" class="second-image" alt=""/>
            </div>
        </div>
        <div class="footer mb-1">
            <div class="text-end mb-2">
                <p>Your sincerely</p>
                <p>The Supervillian | Mandarin</p>
            </div> 
            <div class="text-center" style="margin-left: auto; margin-right: auto;">
                <span>T&C apply</span>
                <br />
                <span>© 2024 Advertising Box limited</span>
            </div>
        </div>
    </div>
</body>

</html>`,
});

const sendEmail = async ({ emailType, email, verifyCode = null }) => {
  try {
    if (emailType === 0) {
    } else if (emailType === 1) {
      const mailOptions = sendPublicUserMailContent({ email });
      await transporter.sendMail(mailOptions),
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        };
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
