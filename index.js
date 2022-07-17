const express = require("express");
const path = require("path");

const app = express();
const port = 80;

app.use("/", express.static(path.join(__dirname, "public")));
app.post("/contact-submit", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Johnny McGee is listening on port ${port}`);
});
