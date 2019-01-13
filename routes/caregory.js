const express = require('express');
const controller = require('../controllers/caregory');
const router = express.Router();


router.get('/', controller.getAll);
router.get('/:categoryId', controller.getById);
router.delete('/:categoryId', controller.remove);
router.post('/:categoryId', controller.create);
router.patch('/:categoryId', controller.update);

module.exports = router;