const express = require("express");
const router = express.Router();
const passport = require("passport");
const controller = require("../controllers/home_ctrl");

router.get("/", passport.checkAuthentication, controller.home);
router.use("/user", require("./user"));
router.use("/post", require("./post"));
router.use("/comments", require("./comments"));

module.exports = router;
