const express = require('express');
const controller = require('../controllers/issue');
const router = express.Router();


router.get('/', controller.getAll);
router.get('/:issueId', controller.getById);
router.delete('/:issueId', controller.remove);
router.post('/:issueId', controller.create);
router.patch('/:issueId', controller.update);

module.exports = router;