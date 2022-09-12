const express = require('express');
const router = express.Router();
const auth = require('../../controllers/admin/auth');

// login post: /api/admin/auth/login
router.post('/login', auth.loginPost);

// register post: /api/admin/auth/register
router.post('/register', auth.registerPost);

// get status: /api/admin/auth/checkAdmin
router.get('/checkAdmin', auth.checkAdmin);

// get status: /api/admin/auth/checkAdmin
router.get('/status', auth.getStatus);

module.exports = router