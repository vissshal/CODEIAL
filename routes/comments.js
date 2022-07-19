const express = require("express");
const passport = require("passport");
const router = express.Router();
const comments = require("../controllers/comments_ctrl");

router.post("/create", passport.checkAuthentication, comments.create);
router.get("/delete/:id", passport.checkAuthentication, comments.delete);

module.exports = router;
