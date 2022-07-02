const express = require("express");
const router = express.Router();

const user = require("../controllers/user_ctrl");

router.get("/profile", user.profile);
module.exports = router;
