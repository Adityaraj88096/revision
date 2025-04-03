const cat = require('../models/cat');
const TestCtrl = {};
TestCtrl.getAllCatTestPapers = async(req, res) => {
    const {exam} = (req.params);
    try{
        const data = await cat.find({exam: exam});
        res.status(200).send(data);
    } catch (error) {
        res.send(200).send({ message : `Internal error : ${error}`});
    }
}
TestCtrl.getCatPyq = async (req, res) => {
    const { exam, type, subtype, set, year } = (req.params);
    try {
        const data = await cat.findOne({ exam: exam, type: type, subtype: subtype, set: set, year: year});
        res.status(200).send(data);
    } catch (error) {
        res.send(200).send({ message : `Internal error : ${error}`});
    }
}

// Post Routes
TestCtrl.addCatPyq = async (req, res) => {
    try {
        const result = await cat.create(req.body);
        res.status(200).send(result);
    } catch (error) {
    res.send(200).send({ message : `Internal error : ${error}`});
}
}
module.exports = TestCtrl;