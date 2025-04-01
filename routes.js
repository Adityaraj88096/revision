const express = require("express");
const { getPyq, addPyq, getAllTopics} = require('./controller');
const topicRouter = express.Router();
// topicRouter.get('/topics', getAllTopics);
topicRouter.get('/topics/pyq/:exam/:year', getPyq);
topicRouter.post('/topic', addPyq);

module.exports = topicRouter;