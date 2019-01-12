const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();


router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.patch('/:id', controller.update);

module.exports = router;