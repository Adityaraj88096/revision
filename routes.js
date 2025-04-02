const express = require("express");
const { getCatPyq, addCatPyq } = require("./controllers/catController");
const { getUpscPyq, addUpscPyq } = require("./controllers/upscController");
const { getSscPyq, addSscPyq } = require("./controllers/sscController");
const topicRouter = express.Router();
// topicRouter.get('/topics', getAllTopics);
topicRouter.get('upsc/:exam/:type/:subtype/:year/:set', getUpscPyq);
topicRouter.get('cat/:exam/:type/:subtype/:year/:set', getCatPyq);
topicRouter.get('ssc/:exam/:type/:subtype/:year/:set', getSscPyq);
topicRouter.post('/addupscpyq', addUpscPyq);
topicRouter.post('/addcatpyq', addCatPyq);
topicRouter.post('/addsscpyq', addSscPyq);

module.exports = topicRouter;