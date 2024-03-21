const express = require("express");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");
require("dotenv").config();

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
  "16lCQ7F23kZGSZvER3JU9R-N8ivhQ5l_GBx2I5fJ5Lwk",
  serviceAccountAuth
);

const authClientObject = await auth.getClient();

doc.loadInfo();
// doc
//   .loadInfo()
//   .then((res) => {})
//   .catch((err) => {
//     console.log(err);
//   });

// doc.loadInfo().then((res) => {
//   console.log(res.data);
// });
/*
app.get("/", (req, res) => {
  res.send("This is home page.");
});

app.post("/", (req, res) => {
  res.send("This is home page with post request.");
});

// PORT
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
*/
