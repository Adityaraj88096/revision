const express = require("express");
const { getAllPapersByExam, getIndividualPaper, getAllPapersByExamType, addTestPaper } = require("./controller");
const topicRouter = express.Router();
topicRouter.get('/:body/:exam/:type/:subtype/:year/:set', getIndividualPaper);
topicRouter.get('/:body/:exam/:type', getAllPapersByExamType);
topicRouter.get('/:body/:exam', getAllPapersByExam);
topicRouter.post('/add/:body', addTestPaper);

module.exports = topicRouter;