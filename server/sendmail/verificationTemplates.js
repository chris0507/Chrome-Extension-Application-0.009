const { createTransport } = require("nodemailer");

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
            width: 50%;
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

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1; // getMonth() returns a zero-based value (0-11)
const day = date.getDate();

const formattedDate = `${year}/${month}/${day}`;

const sendCEOMailContent = ({ CEOemail, CEOname }) => ({
  from: process.env.MAILER_EMAIL,
  to: CEOemail,
  subject: "Sucessful registered",
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
            background-color: black;
        }

        .header-div {
            display: flex;
            justify-conetent: space-between;
        }

        .logo-image {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .header img {
            width: 180px;
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

        .w-100 {
            width: 100%;
        }

        .w-50 {
            width: 50%;
        }

        .gap-1 {
            gap: 1rem;
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

        .text-start {
            text-align: start;
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
            <p class="text-white text-center">${formattedDate}</p>
            <table width="100%" cellspacing="0" cellpadding="0" style="font-family: Arial, sans-serif;">
                <tr>
                    <td style="padding: 20px;">
                        <table style="width: 100%;">
                            <tr>
                                <td style="text-align: left;">
                                    <p style="color: #ffffff;">Annie's burger shack</p>
                                    <p style="color: #ffffff;">Dear ${CEOname},</p>
                                </td>
                                <td style="text-align: right;">
                                    <img src="https://i.ibb.co/hmRVrVY/black-and-white-logo-009-3x.png" alt="0.009">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        <div class="content">
            <div class="flex mb-2">
                <img src="https://i.ibb.co/L8fRbSP/rupert-bloom.jpg" class="first-image w-50" alt="" />
                <div class="w-50" style="margin-top: auto; margin-bottom: auto;">
                    <p class="mb-1"><strong>“It has come to my attention that your business has joined 0.009 to become a
                            “true” proctor of your craft. Mark my words, this is the beginning of something defiant and
                            tactile.”</strong></p>
                    <p class="mb-1">Thank you for downloading & registering to .009 as we attempt to transcend beyond
                        stage 1 of development. We hope this information supports your continued participation in our
                        Chrome extension app.</p>
                    <p>We hope the information presented is helpful and demonstrates our intention for the application
                        at stage 2 of development. </p>
                </div>
            </div>
            <div class="">
                <p class="mb-1">Our CEO defines our craft as the people's choice with a million-dollar question, when
                    and how would you like to grow your business!? Our ambitious objective is to teach more people about
                    advertising as we embark on a journey to establish 0.009 as the most transparent communication tool
                    in the world.</p>
                <p class="mb-1">We aim to enable user transactions with local and international brands through coupons,
                    allowing your business to grow within an ecosystem that supports all stakeholders participating in
                    the Chrome extension application. Presenting partners and users opportunities to engage with
                    audiences from different demographics and backgrounds.</p>
                <p class="mb-1">Simplifying a few age-old myths that stop you from securing real market share for your
                    business and establishing your craft in local or national markets. You can now connect directly with
                    your audiences by incentivizing them with our app token used to purchase coupons. You can also
                    partner with local and international brands to establish influence through one of the millions of
                    Highstreets established by users.</p>
                <p class="mb-1">At stage 2 your business will be awarded a ranking based on use interaction on the
                    platform, we hope to enable a lot of features at this stage by working closely with our developers
                    and designers to bring you an experience never seen before.</p>
                <p class="mb-1">This Demo is supposed to give you the chance to explore .009 on your terms.</p>
                <div class="mb-1">
                    <p>
                        I hope you’ll stay with us long enough to see if our CEO speaking the truth.
                    </p>
                    <p>
                        You re-cap and teach some of the techniques demonstrated by our sales team.
                    </p>
                </div>
                <div>
                    <div style="margin-bottom: 40px">
                        <a href="#" class="tutorial-button mb-1"
                            style="cursor: pointer; text-decoration: none; color: white;">View Demo tutorial</a>
                    </div>
                    <div class="text-end">
                        <span><i>Thanks again, for participating</i></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer mb-1">
            <div class="text-start mb-1">
                <p>Your sincerely</p>
                <p>Founder | Derrick Mugerwa</p>
            </div>
            <div class="text-center mb-1">
                <a href="#" class="bowl-button" style="cursor: pointer; text-decoration: none; color: white;">
                    Download 0.009</a>
            </div>
            <div class="text-center">
                <span>T&C apply</span><br />
                <span>© 2024 Advertising Box limited</span>
            </div>
        </div>
    </div>
</body>

</html>`,
});

const sendBusinessUserMailContent = ({ email, brandName }) => ({
  from: process.env.MAILER_EMAIL,
  to: email,
  subject: "Sucessful registered",
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
            border-bottom: 1px #333 solid;
        }

        .icons {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 7px;
        }

        .section2 {
            padding: 20px 20px 0 20px;
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

        .w-100 {
            width: 100%;
        }

        .w-50 {
            width: 50%;
        }

        .gap-1 {
            gap: 1rem;
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

        .text-start {
            text-align: start;
        }

        .tutorial-button {
            background-color: #02a7e1;
            border: none;
            padding: 1rem;
            color: white;
            border-radius: 10px;
            transition: background-color 0.3s;
        }

        .footer {
            padding: 20px;
        }

        .future {
            display: flex;
            justify-content: space-between;
            gap: 3rem;
            margin-bottom: 2rem;
        }

        @media only screen and (max-width: 1040px) {
            .future {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-bottom: 1rem;
            }
        }
    </style>
</head>

<body style="background-color: antiquewhite !important; padding: 20px;">
    <div class="container">
        <table width="100%" cellspacing="0" cellpadding="0" style="font-family: Arial, sans-serif;">
            <tr>
                <td style="padding: 20px; background-color: red; text-align: center;">
                    <img src="https://i.ibb.co/rpRj9ng/Active-logo-009-3x.png" alt="0.009" width="150">
                    <p style="color: #ffffff;">Thanks, ${brandName}</p>
                </td>
            </tr>
            <tr>
                <td style="text-align: center; padding: 10px;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/64px-Google_Chrome_icon_%28February_2022%29.svg.png"
                        width="64" height="64" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/234px-Safari_browser_logo.svg.png"
                        width="64" height="64" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/220px-Firefox_logo%2C_2019.svg.png"
                        width="64" height="64" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Opera_2015_icon.svg/512px-Opera_2015_icon.svg.png"
                        width="64" height="64" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/512px-Microsoft_Edge_logo_%282019%29.svg.png"
                        width="64" height="64" />
                </td>
            </tr>
            <tr>
                <td style="padding: 10px;">
                    <h2>What is the 0.009 Demo Chrome extension?</h2>
                    <p style="margin-bottom: 10px;">0.009 is here! Thank for your time downloading the next most
                        transparent communication
                        platform in the world. Although we are still in our early stages of development, we are
                        confident
                        you won't get this experience anywhere else Satotz.</p>
                    <p style="margin-bottom: 10px;">
                        0.009 is Advertising Box Limited's latest innovation aimed to improve how users engage with
                        advertising communications. We try to adapt user choice into growth in the platform's expanding
                        catalogue of users from across multiple demographics.
                    </p>
                    <p style="margin-bottom: 10px;">
                        Our journey continues to be the pursuit of enabling more people access to local communications;
                        adapting technology to further support user interests.
                    </p>
                    <p style="margin-bottom: 10px;">
                        Enabling users to interact with their favourite brands (you) and coupons that enhance their
                        customer
                        experiences through a uniquely simplified rewards system. We really hope you enjoy this stage 1
                        journey and continue to use 0.009 in your future communications.
                    </p>
                </td>
            </tr>
            <tr>
                <td style="text-align: center; padding: 10px;">
                    <a href="#" class="tutorial-button"
                        style="display: inline-block; width: 100%; padding: 10px; color: #fff; text-decoration: none;">View
                        Demo tutorial</a>
                </td>
            </tr>
            <tr>
                <td style="text-align: center; padding: 10px;">
                    <a href="#" style="text-decoration: none;">Our future!</a>
                </td>
            </tr>

        </table>
        <div class="content">
            <table width="100%" cellspacing="0" cellpadding="0" style="font-family: Arial, sans-serif;">
                <tr>
                    <td style="padding: 10px;">
                        <table width="100%" cellspacing="0" cellpadding="0">
                            <tr>
                                <td style="width: 50%; padding: 10px; text-align: center;">
                                    <img src="https://i.ibb.co/V2TGwRh/1.png" width="100%" />
                                    <h2>Ranking on 0.009</h2>
                                    <p>In 0.009 you'll need to close attention to who is adding your URL to their
                                        dashboard. This
                                        will go towards how users view your brand on 0.009 as well as your wallet size
                                        enabling how
                                        reward customers. You won't just be registering your business at stage 2.</p>
                                </td>
                                <td style="width: 50%; padding: 10px; text-align: center;">
                                    <img src="https://i.ibb.co/pPm8Wt7/2.png" width="100%" />
                                    <h2>Coupons, what’s new?</h2>
                                    <p>Instead of ignoring customers disadvantaged with wealth limitations, why not
                                        capture their
                                        future interest with a coupon that means something to them. All the while you
                                        can test and
                                        establish your brand in new markets and demographics you never knew.</p>
                                </td>
                            </tr>
                        </table>
                        <table width="100%" cellspacing="0" cellpadding="0">
                            <tr>
                                <td style="width: 50%; padding: 10px; text-align: center;">
                                    <img src="https://i.ibb.co/qNRkMmV/3.png" width="100%" />
                                    <h2>Schmeckle |sch</h2>
                                    <p>Only on 0.009 can you interact with the schmeckle; our in platform token
                                        exchanged between
                                        users. Awkwardly our token wants to be exchanged for coupons and enable
                                        relationships
                                        between users. There are a lot of different cultures we support and we believe
                                        it's best to
                                        check first. </p>
                                </td>
                                <td style="width: 50%; padding: 10px; text-align: center;">
                                    <img src="https://i.ibb.co/GTt5pQF/5.png" width="100%" />
                                    <h2>0.00_Highstreet {mine}</h2>
                                    <p>Be careful, 0.000 is currently the property of the supervillain Mandarin! This
                                        flagship
                                        product aims to enable users greater ease when exploring the world of
                                        advertising. Adapted
                                        from PPC, you can now explore local businesses and keep track of their journey
                                        to secure a
                                        high ranking.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        <table width="100%" cellspacing="0" cellpadding="0" style="font-family: Arial, sans-serif;">
            <tr>
                <td style="text-align: center; padding: 10px;">
                    <a href="#" class="tutorial-button"
                        style="display: inline-block; width: 100%; padding: 10px; color: #fff; text-decoration: none;">View
                        Demo tutorial</a>
                </td>
            </tr>
            <tr>
                <td style="text-align: center; padding: 10px;">
                    <h2><a href="#" style="text-decoration: none; color: #000;">Create Your Public Account</a></h2>
                    <p><i>Nothing more, just for a chance to enjoy more life!</i></p>
                </td>
            </tr>
            <tr>
                <td style="text-align: center; padding: 10px;">
                    <img src="https://i.ibb.co/Jq7K0vJ/chill-and-smile-with-friends.jpg" width="100%" height="300px" />
                </td>
            </tr>
        </table>
        <table width="100%" cellspacing="0" cellpadding="0"
            style="font-family: Arial, sans-serif; margin-bottom: 20px;">
            <tr>
                <td style="text-align: left; padding: 10px;">
                    <p>Your sincerely</p>
                    <p>Chief Executive Officer | AD | BX | ${brandName}</p>
                </td>
            </tr>
            <tr>
                <td style="text-align: center; padding: 20px;">
                    <span>T&C apply</span><br />
                    <span>© 2024 Advertising Box limited</span>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>`,
});

const sendEmail = async ({
  emailType,
  CEOemail,
  email,
  verifyCode = null,
  CEOname,
  brandName,
}) => {
  try {
    if (emailType === 0) {
      const mailOptions = sendBusinessUserMailContent({ email, brandName });
      await transporter.sendMail(mailOptions),
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        };
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
      // send CEO email
      const mailOptions = sendCEOMailContent({ CEOemail, CEOname });
      await transporter.sendMail(mailOptions),
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        };
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
