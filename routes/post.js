const express = require("express");
const router = express.Router();
const post = require("../controllers/posts_ctrl");

router.post("/create", post.create);
router.get("/delete/:id", post.delete);

module.exports = router;
