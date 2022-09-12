const express = require('express');
const router = express.Router();
const techs = require('../../controllers/admin/techs');
const upload = require('../../middlewares/upload');

// Get all techs: /api/admin/techs
router.get('/', techs.getAll);

// Add one tech: /api/admin/techs/add
router.post('/add', upload('techs').single('image'), techs.addNew);

// Update one tech: /api/admin/techs/update/:id
router.post('/update/:id', techs.updateOne);

// Delete one tech: /api/admin/techs/delete
router.delete('/delete/:id', techs.deleteOne);

module.exports = router;