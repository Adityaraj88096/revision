const express = require("express");
const { getTopics, addTopic, getAllTopics} = require('./controller');
const topicRouter = express.Router();
topicRouter.get('/topics', getAllTopics);
topicRouter.get('/topics/:date', getTopics);
topicRouter.post('/topic', addTopic);

module.exports = topicRouter;