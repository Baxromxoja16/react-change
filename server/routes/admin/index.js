const express = require('express');
const router = express.Router();
const { loginPost } = require('../../controllers/admin/auth/login');
const { registerPost } = require('../../controllers/admin/auth/register');

// login post
router.post('/login', loginPost);

// register post
router.post('/register', registerPost);

// get status
router.get('/status', registerPost);

router.get('/', (req, res) => {
    res.json({ ok: true, message: 'This is admin dashboard!' })
});



module.exports = router