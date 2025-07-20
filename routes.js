const express = require("express");
const { getAllPapersByExam, getIndividualPaper, getAllPapersByExamType, addTestPaper, getPaperByExamId, fetchCountdown, addCountDown } = require("./controller");
const topicRouter = express.Router();
topicRouter.get('/:body/:exam/:type/:subtype/:year/:set', getIndividualPaper);
// topicRouter.get('/:body/:exam/:type', getAllPapersByExamType);
topicRouter.get('/:body/:exam', getAllPapersByExam);
topicRouter.get('/:body/:exam/:id', getPaperByExamId); //This is added in night
topicRouter.get('/:name', fetchCountdown);
topicRouter.post('/add/:body', addTestPaper);
topicRouter.post('/add/exam/countdown', addCountDown);


module.exports = topicRouter;