const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/admin/auth");

// Authentication: /api/admin/auth
router.use("/auth", require("./auth"));

// Authorization protect router: /api/admin/*
router.use(authMiddleware);

// Techs crud
router.use("/techs", require("./techs"));

// Lessons crud
router.use("/lessons", require("./lessons"));

// Courses crud
router.use("/courses", require("./courses"));

// Contact
router.use('/contact', require('./contact'));

module.exports = router;
