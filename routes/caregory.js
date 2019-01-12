const express = require('express');
const controller = require('../controllers/caregory');
const router = express.Router();


router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.delete('/:id', controller.remove);
router.post('/:id', controller.create);
router.patch('/:id', controller.update);

module.exports = router;