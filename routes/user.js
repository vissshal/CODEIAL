const express = require("express");
const router = express.Router();
const passport = require("passport");
const user = require("../controllers/user_ctrl");

router.get("/profile", passport.checkAuthentication, user.profile);
router.get("/signin", user.signin);
router.get("/signup", user.signup);
router.post("/create", user.create);
router.post(
  "/session",
  passport.authenticate("local", { failureRedirect: "/user/signin" }),
  user.session
  // In case sign-in page pe authentication failed (wrong password or wrong email) hua then upper { failureRedirect: "/" } hi work krta h
);
router.get("/signout", user.signout);

module.exports = router;
