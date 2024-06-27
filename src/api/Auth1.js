const express = require("express");
const router = express.Router();
npm;
const authController = require("../controllers/authController");

router.post("/", authController.handleLog);

module.exports = router;
