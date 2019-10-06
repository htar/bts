const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();
const passport = require('passport');

router.get('/@me', controller.show);
router.get('/',passport.authenticate('jwt',{session:false}), controller.getAllUsers);
router.post('/search', passport.authenticate('jwt',{session:false}), controller.search);
router.get('/:userId', controller.getUserById);
router.patch('/:userId',passport.authenticate('jwt',{session:false}), controller.updateUser);

module.exports = router;