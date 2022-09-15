const express = require("express");
const router = express.Router();
const courses = require("../../controllers/admin/courses");
const upload = require("../../middlewares/upload");

// Get all courses: /api/admin/courses
router.get("/", courses.getAll);

// Add one course: /api/admin/courses/add
router.post("/add", upload(['courses']).fields([{ name: 'bg', maxCount: 1 }, { name: 'image', maxCount: 1 }, { name: 'learnImage' }]), courses.addNew);

// Update one course: /api/admin/courses/update/:id
router.post("/update/:id", courses.updateOne);

// Delete one course: /api/admin/courses/delete
router.delete("/delete/:id", courses.deleteOne);

module.exports = router;