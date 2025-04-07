const express = require("express");
const { getCatPyq, addCatPyq, getAllCatTestPapers } = require("./controllers/catController");
const { getUpscPyq, addUpscPyq, getAllUpscTestPapers } = require("./controllers/upscController");
const { getSscPyq, addSscPyq, getAllSscTestPapers } = require("./controllers/sscController");
const { getBankPyq, getAllBankTestPapers, addBankPyq } = require("./controllers/bankController");
const topicRouter = express.Router();
// topicRouter.get('/topics', getAllTopics);
topicRouter.get('/:body/:exam/:type/:subtype/:year/:set', getUpscPyq);
topicRouter.get('/cat/:exam/:type/:subtype/:year/:set', getCatPyq);
topicRouter.get('/ssc/:exam/:type/:subtype/:year/:set', getSscPyq);
topicRouter.get('/bank/:exam/:type/:subtype/:year/:set', getBankPyq);
topicRouter.get('/upsc/:exam', getAllUpscTestPapers);
topicRouter.get('/cat/:exam', getAllCatTestPapers);
topicRouter.get('/ssc/:exam', getAllSscTestPapers);
topicRouter.get('/bank/:exam', getAllBankTestPapers);
topicRouter.post('/addupscpyq', addUpscPyq);
topicRouter.post('/addcatpyq', addCatPyq);
topicRouter.post('/addsscpyq', addSscPyq);
topicRouter.post('/addbankpyq', addBankPyq);

module.exports = topicRouter;