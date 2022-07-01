const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const routes = require("./routes");
const controller = require("./controllers/home_controller");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", routes);
app.use(express.urlencoded());
app.use(express.static("assets"));

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is running on the port : ${port}`);
});
