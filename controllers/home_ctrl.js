const Post = require("../models/posts");

module.exports.home = function (req, res) {
  //console.log(req.cookies);

  Post.find({ user: req.user._id })
    .populate("user")
    .exec(function (err, post) {
      if (err) {
        console.log(err);
        return;
      }

      return res.render("home", {
        title: "CODEIAL || Home ",
        post: post,
      });
    });
};
