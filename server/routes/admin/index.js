const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ ok: true, message: 'This is admin dashboard!' })
});

module.exports = router