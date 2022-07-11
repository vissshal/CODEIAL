const passport = require("passport");

const localStrategy = require("passport-local").Strategy;
const User = require("../models/user");

passport.use(
  new localStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      // Arguement me email/password user ne while signing in dia hoga..wahi hoga
      User.findOne(
        { email: email },
        // first email is the property we are looking for in the Schema and,
        // the second one is the input we received from the user while signing in
        function (err, user) {
          if (err) {
            console.log(err);
            return done(err);
          }
          // User Not Found
          else if (!user) {
            console.log("User Not Found");
            return done(null, false);
          }
          // Password doesn't match
          else if (user.password !== password) {
            console.log("Password doesn't match");
            return done(null, false);
          }
          // Logged In successfully
          else {
            console.log("Logged In successfully ");
            console.log("User  - " + user.name);
            return done(null, user);
          }
        }
      );
    }
  )
);

// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
  return done(null, user._id);
});

// deserializing the user from the key in the cookies
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.log(err);
      return done(err);
    } else {
      return done(null, user);
    }
  });
});

// check if the user is authenticated
passport.checkAuthentication = function (req, res, next) {
  // if the user is signed in, then pass on the request to the next function(controller's action)
  if (req.isAuthenticated()) {
    return next();
  }
  // if the user is not signed in
  return res.redirect("/user/signin");
};

passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
    res.locals.user = req.user;
    // now 'user' is a global variable till the session is live but it can only be used with locals as prefix i.e. locals.user.xxxx
  }
  next();
};

module.exports = passport;
