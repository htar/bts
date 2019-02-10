const express = require('express');
const controller = require('../controllers/caregory');
const router = express.Router();
const passport = require('passport');

router.delete('/:categoryId',passport.authenticate('jwt',{session:false}), controller.removeCategory);
router.post('/',passport.authenticate('jwt',{session:false}), controller.createCategory);
router.patch('/:categoryId',passport.authenticate('jwt',{session:false}), controller.updateCategory);

module.exports = router;