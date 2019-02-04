const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();

router.get('/@me', controller.show);
router.get('/', controller.getAllUsers);
router.get('/:userId', controller.getUserById);
router.patch('/:userId', controller.updateUser);

module.exports = router;