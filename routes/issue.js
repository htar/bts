const express = require('express');
const controller = require('../controllers/issue');
const router = express.Router();


router.get('/', controller.getAllIssues);
router.post('/', controller.createIssue);
router.get('/:issueId', controller.getIssueById);
router.delete('/:issueId', controller.removeIssue);
router.patch('/:issueId', controller.updateIssue);

module.exports = router;