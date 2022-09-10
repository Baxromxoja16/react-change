const express = require('express');
const router = express.Router();
const { registerPost } = require('../../../controllers/admin/auth/register')

router.post('/', registerPost);

module.exports = router