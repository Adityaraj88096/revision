const bank = require('./models/bank');
const cat = require('./models/cat');
const countdown = require('./models/countdown');
const ssc = require('./models/ssc');
const upsc = require('./models/upsc');
const testCtrl = {};
testCtrl.getAllPapersByExam = async (req, res) => {
    console.log("Request received for all papers by exam");
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
    console.log("Request received for all papers by exam type");
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
    console.log(`Exam = ${exam}, Body = ${body}, Id = ${id}`);
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
    console.log("Individual Paper Request Received");
    console.log(req.params);
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
testCtrl.fetchCountdown = async(req, res) => {
    try{
        const result = await countdown.find({ name: req.params.name, isActive: true })
        res.status(200).send(result);
    } catch(err) {
        console.log(err)
    }
}
testCtrl.addCountDown = async(req, res) => {
    const {name, category, phase, date, isActive} = req.body;
    const [day, month, year] = date.split('-');
    const dateFormatted = new Date(`${year}-${month}-${day}`);
    try{
        const result = await countdown.create({name:name, category:category,
             phase: phase, date:dateFormatted, isActive: isActive});
        res.status(200).send({message: "Successfully created.", result: result})
    } catch(err) {
        console.log("Error : ", err.message);
    }
}
module.exports = testCtrl