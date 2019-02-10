const express = require('express');
const controller = require('../controllers/project');
const router = express.Router();
const passport = require('passport');


router.get('/', passport.authenticate('jwt',{session:false}),controller.getAllProjects);
router.get('/:progectId',passport.authenticate('jwt',{session:false}), controller.getProjectById);
router.delete('/:progectId',passport.authenticate('jwt',{session:false}), controller.removeProject);
router.post('/',passport.authenticate('jwt',{session:false}), controller.createProject);
router.patch('/:progectId',passport.authenticate('jwt',{session:false}), controller.updateProject);

module.exports = router;