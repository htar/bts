const express = require('express');
const controller = require('../controllers/caregory');
const router = express.Router();

router.delete('/:categoryId', controller.removeCategory);
router.post('/', controller.createCategory);
router.patch('/:categoryId', controller.updateCategory);

module.exports = router;