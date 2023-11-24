const express = require("express");
const router = express.Router();
const authcontroller = require("../src/controllers/auth-controller");

router.route("/").get(authcontroller.home);

router.route("/register").post(authcontroller.register);
router.route("/addcategory").post(authcontroller.category);




module.exports = router;