const express = require("express");
const router = express.Router();
const lessons = require("../../controllers/admin/lessons");
const upload = require("../../middlewares/upload");

// Get all lessons: /api/admin/lessons
router.get("/", lessons.getAll);

// Add one lesson: /api/admin/lessons/add
router.post("/add", upload(["lessons"]).single("image"), lessons.addNew);

// Update one lesson: /api/admin/lessons/update/:id
router.post("/update/:id", lessons.updateOne);

// Delete one lesson: /api/admin/lessons/delete
router.delete("/delete/:id", lessons.deleteOne);

module.exports = router;
