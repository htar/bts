const express = require('express');
const controller = require('../controllers/auth');
const router = express.Router();


// localhost:3030/api/auth/login
router.get('/login', controller.login);

// localhost:3030/api/auth/register
router.get('/register', controller.register);

module.exports = router;