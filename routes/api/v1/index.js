const express = require("express");
const router = express.Router();
const passport = require("passport");



router.use("/doctors/", require("./doctors"));
router.use("/patients/", require("./patients"));


module.exports = router;
