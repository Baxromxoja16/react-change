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

router.use((req, res) => {
  res
    .status(404)
    .json({ ok: false, message: "404 Error: Path is not defined!" });
});

module.exports = router;
