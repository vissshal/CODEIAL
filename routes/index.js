const express = require("express");
const router = express.Router();
const controller = require("../controllers/home_ctrl");

router.get("/", controller.home);
router.use("/user", require("./user"));

module.exports = router;
