const express = require("express");
const { getAllPapersByExam, getIndividualPaper, getAllPapersByExamType, addTestPaper, getPaperByExamId, fetchCountdown } = require("./controller");
const topicRouter = express.Router();
topicRouter.get('/:body/:exam/:type/:subtype/:year/:set', getIndividualPaper);
// topicRouter.get('/:body/:exam/:type', getAllPapersByExamType);
topicRouter.get('/:body/:exam', getAllPapersByExam);
topicRouter.get('/:body/:exam/:id', getPaperByExamId); //This is added in night
topicRouter.post('/add/:body', addTestPaper);
topicRouter.get('/countdown', fetchCountdown); //This is added in night


module.exports = topicRouter;