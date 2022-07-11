const User = require("../models/user");
const Post = require("../models/posts");

module.exports.create = function (req, res) {
  Post.create(
    {
      content: req.body.content,
      user: req.user._id,
      // req.user contains all the details of the current signed in user from the session cookie in JSON format
    },

    function (err, post) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(req.user.name + " Posted : " + req.body.content);
      res.redirect("/");
    }
  );
};
