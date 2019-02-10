const express = require('express');
const controller = require('../controllers/issue');
const router = express.Router();
const passport = require('passport');

router.get('/',passport.authenticate('jwt',{session:false}), controller.getIssueList);
router.post('/',passport.authenticate('jwt',{session:false}), controller.createIssue);
router.get('/:issueId',passport.authenticate('jwt',{session:false}), controller.getIssueById);
router.delete('/:issueId',passport.authenticate('jwt',{session:false}), controller.removeIssue);
router.patch('/:issueId',passport.authenticate('jwt',{session:false}), controller.updateIssue);

module.exports = router;