const bank = require('../models/bank');
const TestCtrl = {};
TestCtrl.getAllBankTestPapers = async(req, res) => {
    const {exam} = (req.params);
    try{
        const data = await bank.find({exam: exam});
        res.status(200).send(data);
    } catch (error) {
        res.send(200).send({ message : `Internal error : ${error}`});
    }
}
TestCtrl.getBankPyq = async (req, res) => {
    const { exam, type, subtype, set, year } = (req.params);
    try {
        const data = await bank.findOne({ exam: exam, type: type, subtype: subtype, set: set, year: year});
        res.status(200).send(data);
    } catch (error) {
        res.status(200).send({ Message: `Internal error : ${error}`})
    }
}

// Post Routes
TestCtrl.addBankPyq = async (req, res) => {
    try {
        const result = await bank.create(req.body);
        res.status(200).send(result);
    } catch (error) {
    res.status(200).send({ Message: `Internal error : ${error}`})
}
}



module.exports = TestCtrl;