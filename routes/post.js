const express = require("express");
const router = express.Router();
const post = require("../controllers/posts_ctrl");

router.post("/create", post.create);

module.exports = router;
