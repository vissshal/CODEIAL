const User = require("../models/user");
const Post = require("../models/posts");
const Comments = require("../models/comments");

module.exports.create = function (req, res) {
  Post.findById(req.body.post, function (err, post) {
    if (post) {
      Comments.create(
        {
          content: req.body.content,
          post: req.body.post,
          // since we are passing the comment hidden within the form itself with name = 'post'
          user: req.user._id,
          // req.user contains all the information related to the logged In user
        },
        function (err, comment) {
          if (err) {
            console.log(err);
          }
          post.comments.unshift(comment);
          // post me jo comments aray h usme comment ko add krne k liye
          post.save();
          // save() method is necessary in case we're updating something in DB (here: posts)
          return res.redirect("/");
        }
      );
    }
  });
};