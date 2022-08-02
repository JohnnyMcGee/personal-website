const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const http = require ('http');
const https = require('https');
const fs = require('fs');

const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");

const serviceAccount = require("./google-services.json");
initializeApp({
  credential: cert(serviceAccount),
});
const db = getFirestore();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// get homepage
app.use("/", express.static(path.join(__dirname, "public")));

// get contact
app.use(
  "/contact/",
  express.static(path.join(__dirname, "public"), { index: "pages/contact.html" })
);

// send form contents to firestore
app.post("/contact/", (req, res) => {
  db.collection("contact-forms").add({
    fullName: req.body.full_name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
    dateTime: Timestamp.now(),
  });
  res.redirect("/");
});

// SERVERS

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/johnnymcgee.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/johnnymcgee.com/fullchain.pem'),
}, app);

httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});
