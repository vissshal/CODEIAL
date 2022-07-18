const express = require("express");
const router = express.Router();
const comments = require("../controllers/comments_ctrl");

router.post("/create", comments.create);
router.get("/delete/:id", comments.delete);

module.exports = router;
