const express = require("express");
const router = express.Router();

const user = require("../controllers/user_ctrl");

router.get("/profile", user.profile);
router.get("/signin", user.signin);
router.get("/signup", user.signup);
router.post("/create", user.create);
router.post("/session", user.session);
router.get("/signout/", user.signout);

module.exports = router;
