const express = require('express');
const router = express.Router();
const contact = require('../../controllers/admin/contact');

// Add one contact: /api/contact/add
router.post("/add", contact.addNew);

module.exports = router;