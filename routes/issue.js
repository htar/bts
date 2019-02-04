const express = require('express');
const controller = require('../controllers/issue');
const router = express.Router();


router.get('/', controller.getAllIssues);
router.get('/:issueId', controller.getIssueById);
router.delete('/:issueId', controller.removeIssue);
router.post('/:issueId', controller.createIssue);
router.patch('/:issueId', controller.updateIssue);

module.exports = router;