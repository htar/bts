const express = require('express');
const controller = require('../controllers/caregory');
const router = express.Router();


router.get('/', controller.getAllCategories);
router.get('/:categoryId', controller.getCategoryById);
router.delete('/:categoryId', controller.removeCategory);
router.post('/:categoryId', controller.createCategory);
router.patch('/:categoryId', controller.updateCategory);

module.exports = router;