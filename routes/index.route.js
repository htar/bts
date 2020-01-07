const express = require('express');

const router = express.Router();

// // http://localhost:3030/api/project

router.use('/analytics', require('./analytics'));
router.use('/auth', require('./auth'));
router.use('/pipeline', require('./pipeline'));
router.use('/comment', require('./comment'));
router.use('/issue', require('./issue'));
router.use('/project', require('./project'));
router.use('/user', require('./user'));


module.exports = router;
