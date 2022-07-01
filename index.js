const express = require("express");
const app = express();
const port = 8000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.use(express.static("assests"));

app.get("/", function (req, res) {
  return res.send("<h2>CODEIAL </h2>");
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is running on the port : ${port}`);
});
