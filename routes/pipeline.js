const express = require('express');
const controller = require('../controllers/pipeline');
const router = express.Router();

router.delete('/:pipelineId', controller.removePipeline);
router.post('/', controller.createPipeline);
router.patch('/:pipelineId', controller.updatePipeline);

module.exports = router;