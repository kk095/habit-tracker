const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

passport.use(
  // THIS FUNCTION IS USED TO LOGIN THE USER
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user || user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser(function (User, done) {
  // TO SERIALIZE THE USER ID
  done(null, User.id);
});

passport.deserializeUser(function (id, done) {
  // TO DESERIALIZE THE USER ID
  User.findById(id, function (err, user) {
    if (err) {
      console.log("error in finding user during deserializing in passport js");
      return done(err);
    }
    return done(null, user);
  });
});

passport.checkAuthentication = function (req, res, next) {
  // TO CHECK USER IS LOGGED-IN OR NOT
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/login");
};

passport.setAuthenticatedUser = function (req, res, next) {
  // TO SET LOGGED-IN USER IN EVERY REQUEST.
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  return next();
};

module.exports = passport;
