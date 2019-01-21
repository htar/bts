const express = require('express');
const controller = require('../controllers/project');
const router = express.Router();
const passport = require('passport');


router.get('/', passport.authenticate('jwt',{session:false}),controller.getAll);
router.get('/:progectId', controller.getById);
router.delete('/:progectId', controller.remove);
router.post('/:progectId', controller.create);
router.patch('/:progectId', controller.update);

module.exports = router;