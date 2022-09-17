const express = require('express');
const router = express.Router();
const contact = require('../../controllers/admin/contact');

// Get all contact: /api/admin/contact
router.get('/', contact.getAll);

// Delete one contact: /api/admin/contact/delete
router.delete('/delete/:id', contact.deleteOne);

module.exports = router;