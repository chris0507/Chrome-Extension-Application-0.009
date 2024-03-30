const mailgun = require("mailgun-js");
const DOMAIN = "sandbox5f729ea35fbf46f89213958519055b56.mailgun.org";
const mg = mailgun({
  apiKey: "73b831b298fc8f0be8515e5ed26bcd17-f68a26c9-01d69b27",
  domain: DOMAIN,
});
const data = {
  from: "Mailgun Sandbox <postmaster@sandbox5f729ea35fbf46f89213958519055b56.mailgun.org>",
  to: "topdev1380@gmail.com",
  subject: "Hello",
  text: "Testing some Mailgun awesomness!",
};
mg.messages().send(data, function (error, body) {
  console.log(body);
});

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.
