const ssc = require('../models/ssc');
const TestCtrl = {};
TestCtrl.getAllSscTestPapers = async(req, res) => {
    const {exam} = (req.params);
    try{
        const data = await ssc.find({exam: exam});
        console.log("All tests fetched", data);
        res.status(200).send(data);
    } catch (error) {
        res.send(200).send({ message : `Internal error : ${error}`});
    }
}
TestCtrl.getSscPyq = async (req, res) => {
    console.log("Get Tests route calling...");
    const { exam, type, subtype, set, year } = (req.params);
    console.log(typeof(year));
    console.log(`exam - ${exam}, year - ${year}, type - ${type}, subtype - ${subtype}, set - ${set}`);
    try {
        const data = await ssc.findOne({ exam: exam, type: type, subtype: subtype, set: set, year: year});
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.send(200).send({ message : `Internal error : ${error}`});
    }
}

// Post Routes
TestCtrl.addSscPyq = async (req, res) => {
    console.log("Post Test route calling...");
    console.log(req.body);
    try {
        const result = await ssc.create(req.body);
        console.log(result)
        res.status(200).send(result);
        // console.log(data);
        // res.status(200).send(data);
    } catch (error) {
    console.log("Catch ran...", error)
    res.send(200).send({ message : `Internal error : ${error}`});
}
}



module.exports = TestCtrl;