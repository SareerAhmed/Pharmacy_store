const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middelwares/validate-middelware");


router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema),authcontroller.register);
router.route("/login").post(authcontroller.login);
router.route("/addcategory").post(authcontroller.category);




module.exports = router;