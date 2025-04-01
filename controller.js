const Pyqs = require('./model');
const TopicCtrl = {};

TopicCtrl.getAllTopics = async (req, res) => {
    console.log("Get all topics route calling...");
    try {
        const data = await Topics.find();
        console.log(data)
        res.status(200).send(data);
    } catch (error) {
        res.status(200).send({ Message: "Internal database error", response: error })
    }
}
TopicCtrl.getPyq = async (req, res) => {
    console.log("Get topics route calling...");
    const { exam, year } = (req.params);
    console.log(`exam ${exam}, year ${year}`)
    try {
        const data = await Pyqs.findOne({ exam: exam, year: year });
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(200).send({ Message: "Internal database error" })
    }
}

// Post Routes
TopicCtrl.addPyq = async (req, res) => {
    console.log("Post topic route calling...");
    console.log(req.body);
    try {
        const result = await Pyqs.create(req.body);
        console.log(result)
        // console.log(data.data);
        res.status(200).send(result);
        console.log(data);
        // res.status(200).send(data);
    } catch (error) {
    console.log("Catch ran...", error)
    res.status(200).send({ Message: "Internal database error", error })
}
}



module.exports = TopicCtrl;