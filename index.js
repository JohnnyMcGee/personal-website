const { initializeApp } = require("firebase/app");
const express = require("express");
const path = require("path");
// const { body, validationResult } = require("express-validator");
var bodyParser = require("body-parser");

const app = express();
const port = 80;

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
// app.use(express.json()); // to support JSON-encoded bodies
// app.use(express.urlencoded()); // to support URL-encoded bodies

app.use("/", express.static(path.join(__dirname, "public")));

const firebaseInit = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD_F99wD_6rErCvfQEtOXwZOligaQAvIq0",
    authDomain: "johnny-mcgee-website.firebaseapp.com",
    projectId: "johnny-mcgee-website",
    storageBucket: "johnny-mcgee-website.appspot.com",
    messagingSenderId: "991571377236",
    appId: "1:991571377236:web:0bfe30093b747408f141c1",
  };

  // Initialize Firebase
  firebaseInit();
  const app = initializeApp(firebaseConfig);
};

// validate input and store the form data
app.post("/contact-submit", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Johnny McGee is listening on port ${port}`);
});
