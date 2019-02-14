const express = require('express');
const controller = require('../controllers/project');
const router = express.Router();
const passport = require('passport');
const {upload} = require('../middleware');

router.post('/', passport.authenticate('jwt',{session:false}),upload.single('image'), controller.createProject);
router.patch('/:progectId', passport.authenticate('jwt',{session:false}),upload.single('image'), controller.updateProject);
router.get('/', passport.authenticate('jwt',{session:false}), controller.getAllProjects);
router.get('/:progectId',passport.authenticate('jwt',{session:false}), controller.getProjectById);
router.delete('/:progectId',passport.authenticate('jwt',{session:false}),controller.removeProject);

module.exports = router;