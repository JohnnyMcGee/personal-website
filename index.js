const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");

const serviceAccount = require("./google-services.json");
initializeApp({
  credential: cert(serviceAccount),
});
const db = getFirestore();

const app = express();
const port = 80;

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

app.listen(port, () => {
  console.log(`Johnny McGee is listening on port ${port}`);
});
