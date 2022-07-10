const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/CODEIAL");
// database name = contacts_list_db

// db is given access to our database
const db = mongoose.connection;

// In case of error
db.on("error", console.error.bind(console, "error connecting to db"));

// called once only when server is fired for the first time
db.once("open", function () {
  console.log("Successfully connected to the database");
});

module.exports = db;
