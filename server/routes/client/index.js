const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ ok: true, message: 'Welcome to home page!' })
});

// Contact
router.use('/contact', require('./contact'));

module.exports = router