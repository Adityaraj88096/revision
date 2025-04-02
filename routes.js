const express = require("express");
const { getUpscPyq, addUpscPyq} = require('./controller');
const topicRouter = express.Router();
// topicRouter.get('/topics', getAllTopics);
topicRouter.get('/:exam/:type/:subtype/:year/:set', getUpscPyq);
topicRouter.post('/addupscpyq', addUpscPyq);

module.exports = topicRouter;