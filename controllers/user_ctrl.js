const Post = require("../models/posts");
const User = require("../models/user");

module.exports.profile = function (req, res) {
  return res.render("profile");
  /*
  if (req.cookies.user_id) {
    User.findById(req.cookies.user_id, function (err, user) {
      if (user) {
        return res.render("profile", {
          title: `${user.name} - Profile`,
          user: user,
        });
      } else {
        return res.redirect("/user/signin");
      }
    });
  } else {
    return res.redirect("/user/signin");
  }
  */
};
module.exports.signin = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/user/profile");
  }
  return res.render("sign-in", { title: "Sign-In " });
  /*
  if (req.cookies.user_id) {
    return res.redirect("/user/profile");
  }
  //
  else {
    return res.render("sign-in", { title: "Sign-In " });
  }
  */
};
module.exports.signup = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/user/profile");
  }
  return res.render("sign-up", { title: "Sign-Up " });
  /*
  if (req.cookies.user_id) {
    return res.redirect("/user/profile");
  }
  //
  else {
    return res.render("sign-up", { title: "Sign-Up " });
  }
  */
};

module.exports.create = function (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log(err);
      return res.redirect("back");
    }
    if (!user) {
      User.create(
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
        function (err, user) {
          if (err) {
            console.log(err);
            return;
          }
          return res.redirect("/user/signin");
        }
      );
    } else {
      return res.redirect("/user/signin");
    }
  });
};

module.exports.session = function (req, res) {
  return res.redirect("/");
  /*
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log(err);
      return res.redirect("back");
    }
    // User Not Found
    else if (!user) {
      console.log("User Not Found");
      return res.redirect("back");
    }
    // Password doesn't match
    else if (user.password !== req.body.password) {
      console.log("Password doesn't match");
      return res.redirect("back");
    }
    // Logged In successfully
    else if (user.password === req.body.password) {
      console.log("Logged In successfully ");
      console.log("User  - " + user.name);
      // sending cookie
      res.cookie("user_id", user._id);
      // cookie must be send with key as 'user id' and not as actual name otherwise it won't be possible to find who was logged In recently
      return res.redirect("/user/profile");
    }
  });
  */
};

module.exports.signout = function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    console.log("Logged out successfully");
    return res.redirect("/user/signin");
  });
};
