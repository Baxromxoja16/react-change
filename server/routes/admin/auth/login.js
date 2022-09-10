const express = require('express');
const router = express.Router();
const { loginPost } = require('../../../controllers/admin/auth/login')

router.post('/', loginPost);

module.exports = router