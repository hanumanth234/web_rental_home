const express = require("express");
const router = express.Router();
const User=require("../models/user.js");
const wrapasync=require("../utils/wrapasync.js");
const passport=require("passport");
const flash=require("connect-flash");
const {savedRedirectUrl}=require("../middleware.js");
const userController =require("../controllers/users.js");


router.route("/signup")
.get(userController.signup)
.post(wrapasync(userController.signup));

router.route("/login")
.get(userController.renderloginform)
.post(savedRedirectUrl,passport.authenticate("local", {
    failureRedirect: '/login',
    failureFlash: true
  }), userController.login);

router.get("/logout",userController.logout);

module.exports=router;