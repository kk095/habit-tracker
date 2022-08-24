const express = require("express");
const router = express.Router();
const passport = require("passport");
//---- all sub routes
const homeController = require("../controller/home_controller");
const createHabitController = require("../controller/createhabit_controller");
const deleteHabitController = require("../controller/deletehabit_controller");
const habitDetailsController = require("../controller/habitdetails_controller");

router.get("/", passport.checkAuthentication, homeController.home);
router.get("/login", homeController.login);
router.get("/signup", homeController.signup);
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  homeController.createSession
);
router.post("/signup", homeController.createUser);
router.get("/logout", homeController.logout);

router.post("/addHabit", createHabitController.create);
router.get("/delete", deleteHabitController.delete);

router.get("/details", habitDetailsController.showDetails);
router.get("/changestatus", habitDetailsController.updateStatus);

module.exports = router;
