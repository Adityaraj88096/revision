const upsc = require('../models/upsc');
const TestCtrl = {};
TestCtrl.getAllUpscTestPapers = async(req, res) => {
    const {exam} = (req.params);
    try{
        const data = await upsc.find({exam: exam});
        res.status(200).send(data);
    } catch (error) {
        res.send(200).send({ message : `Internal error : ${error}`});
    }
};
TestCtrl.getUpscPyq = async (req, res) => {
    const {body, exam, type, subtype, set, year } = (req.params);
    try {
        const data = await upsc.findOne({ exam: exam, type: type, subtype: subtype, set: set, year: year});
        res.status(200).send(data);
    } catch (error) {
        res.send(200).send({ message : `Internal error : ${error}`});
    }
}

// Post Routes
TestCtrl.addUpscPyq = async (req, res) => {
    try {
        const result = await upsc.create(req.body);
        res.status(200).send(result);
    } catch (error) {
    res.send(200).send({ message : `Internal error : ${error}`});
}
}



module.exports = TestCtrl;