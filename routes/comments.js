const express = require("express");
const router = express.Router();
const comments = require("../controllers/comments_ctrl");

router.post("/create", comments.create);

module.exports = router;
