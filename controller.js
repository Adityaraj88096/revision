const bank = require('./models/bank');
const cat = require('./models/cat');
const ssc = require('./models/ssc');
const upsc = require('./models/upsc');
const testCtrl = {};
testCtrl.getAllPapersByExam = async (req, res) => {
    const {body, exam, type, subtype, year, set} = req.params;
    try {
        if(body == 'upsc') {
        const data = await upsc.find({ exam: exam });
        res.status(200).send(data);
        } else if(body == 'cat'){
            const data = await cat.find({ exam: exam });
            res.status(200).send(data);
        } else if(body == 'bank') {
            const data = await bank.find({ exam: exam });
            res.status(200).send(data);
        } else if(body == 'ssc') {
            const data = await ssc.find({ exam: exam });
            res.status(200).send(data);
        }
    } catch (error) {
        res.status(500).send({ message: `Internal error : ${error}` });
    }
}
testCtrl.getAllPapersByExamType = async (req, res) => {
    const {body, exam, type, subtype, year, set} = req.params;
    try {
        if(body == 'upsc') {
        const data = await upsc.find({ exam: exam, type: type });
        res.status(200).send(data);
        } else if(body == 'cat'){
            const data = await cat.find({ exam: exam, type: type });
            res.status(200).send(data);
        } else if(body == 'bank') {
            const data = await bank.find({ exam: exam, type: type });
            res.status(200).send(data);
        } else if(body == 'ssc') {
            const data = await ssc.find({ exam: exam, type: type });
            res.status(200).send(data);
        }
    } catch (error) {
        res.status(500).send({ message: `Internal error : ${error}` });
    }
}

// This route is I was working on previous night
testCtrl.getPaperByExamId = async (req, res) => {
    const {body, exam, id} = req.params;
    try {
        if(body == 'upsc') {
        const data = await upsc.find({ exam: exam, _id: id });
        res.status(200).send(data);
        } else if(body == 'cat'){
            const data = await cat.find({ exam: exam, _id: id });
            res.status(200).send(data);
        } else if(body == 'bank') {
            const data = await bank.find({ exam: exam, _id: id });
            res.status(200).send(data);
        } else if(body == 'ssc') {
            const data = await ssc.find({ exam: exam, _id: id });
            res.status(200).send(data);
        }
    } catch (error) {
        res.status(500).send({ message: `Internal error : ${error}` });
    }
}
testCtrl.getIndividualPaper = async (req, res) => {
    const {body, exam, type, subtype, year, set} = req.params;
    try {
        if(body == 'upsc') {
        const data = await upsc.find({ exam: exam, type: type, subtype: subtype, year: year, set: set });
        res.status(200).send(data);
        } else if(body == 'cat'){
            const data = await cat.find({ exam: exam, type: type, subtype: subtype, year: year, set: set });
            res.status(200).send(data);
        } else if(body == 'bank') {
            const data = await bank.find({ exam: exam, type: type, subtype: subtype, year: year, set: set }); 
            res.status(200).send(data);
        } else if(body == 'ssc') {
            const data = await ssc.find({ exam: exam, type: type, subtype: subtype, year: year, set: set });
            res.status(200).send(data);
        } else {
            res.status(400).send({ message: 'Invalid exam type' });
        }
    } catch (error) {
        res.status(500).send({ message: `Internal error : ${error}` });
    }
}
testCtrl.addTestPaper = async (req, res) => {
        const { body } = req.params;
    console.log(`Data = ${req.body.exam}, ${req.body.type}, ${req.body.subtype}, ${req.body.year}, ${req.body.set}, ${req.body.questionArray}`)
    try {
        if(body == 'upsc') {
            console.log("If ran. Adding upsc test paper")
        const result = await upsc.create(req.body);
        res.status(200).send(result);
        } else if(body == 'bank') {
            console.log("If ran. Adding bank test paper")
            const result = await bank.create(req.body);
            res.status(200).send(result);
        } else if(body == 'cat') {
            console.log("If ran. Adding cat test paper")
            const result = await cat.create(req.body);
            res.status(200).send(result);
        } else if(body == 'ssc') {
            console.log("If ran. Adding ssc test paper")
            const result = await ssc.create(req.body);
            res.status(200).send(result);
        }
    } catch (error) {
        res.status(500).send({ message: `Internal error : ${error}` });
    }
}
module.exports = testCtrl