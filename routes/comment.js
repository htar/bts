const express = require('express');
const controller = require('../controllers/comment');
const router = express.Router();
const passport = require('passport');

router.delete('/:commentId', passport.authenticate('jwt',{session:false}),controller.removeComment);
router.post('/', passport.authenticate('jwt',{session:false}), controller.createComment);
router.patch('/:commentId', passport.authenticate('jwt',{session:false}),controller.updateComment);

module.exports = router;