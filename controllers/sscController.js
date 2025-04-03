const ssc = require('../models/ssc');
const TestCtrl = {};
TestCtrl.getAllSscTestPapers = async(req, res) => {
    const {exam} = (req.params);
    try{
        const data = await ssc.find({exam: exam});
        res.status(200).send(data);
    } catch (error) {
        res.send(200).send({ message : `Internal error : ${error}`});
    }
}
TestCtrl.getSscPyq = async (req, res) => {
    const { exam, type, subtype, set, year } = (req.params);
    try {
        const data = await ssc.findOne({ exam: exam, type: type, subtype: subtype, set: set, year: year});
        res.status(200).send(data);
    } catch (error) {
        res.send(200).send({ message : `Internal error : ${error}`});
    }
}

// Post Routes
TestCtrl.addSscPyq = async (req, res) => {
    try {
        const result = await ssc.create(req.body);
        res.status(200).send(result);
    } catch (error) {
    res.send(200).send({ message : `Internal error : ${error}`});
}
}

module.exports = TestCtrl;