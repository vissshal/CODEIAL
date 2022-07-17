const Post = require("../models/posts");

module.exports.home = function (req, res) {
  //console.log(req.cookies);

  Post.find({}) // yahan arguement me "user: req.user._id" nahi denge to wo sara posts find krke show krega and using population uske respective owner ka details v fetch krega together
    .populate("user")
    .populate({
      path: "comments",
      populate: {
        path: "user", // path me always field name dete h
      },
    })

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
