const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();

router.get('/@me', controller.show);
router.get('/', controller.getAll);
router.get('/:userId', controller.getById);
router.patch('/:userId', controller.update);

module.exports = router;