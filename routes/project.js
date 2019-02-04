const express = require('express');
const controller = require('../controllers/project');
const router = express.Router();
const passport = require('passport');


router.get('/', passport.authenticate('jwt',{session:false}),controller.getAllProjects);
router.get('/:progectId', controller.getProjectById);
router.delete('/:progectId', controller.removeProject);
router.post('/:progectId', controller.createProject);
router.patch('/:progectId', controller.updateProject);

module.exports = router;