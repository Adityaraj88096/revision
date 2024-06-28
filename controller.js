const Topics = require('./model');
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
TopicCtrl.getTopics = async (req, res) => {
    console.log("Get topics route calling...");
    console.log(req.params.date);
    try {
        const data = await Topics.findOne({ date: req.params.date });
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(200).send({ Message: "Internal database error" })
    }
}

// Post Routes
TopicCtrl.addTopic = async (req, res) => {
    console.log("Post topic route calling...");
    console.log(req.body);
    
        const topicsArray = [req.body.topic];
        const task = {
            topics: topicsArray,
            date:  req.body.dates[0],
        }
        console.log(task)
        try {
            const data = await Topics.find({ date: req.body.dates[i] });
            console.log("Try ran...", data);
            if(!data[0]) {
                console.log("If ran");
                const data = await Topics.create(task);
                console.log(data)
                // console.log(data.data);
                res.status(200).send(data);
            }
            else {
                console.log("else ran");
                const data = await Topics.updateOne({date: req.body.dates[0]}, 
                    {"$push": {topics: req.body.topic}}
                );
                console.log(data);
                res.status(200).send(data);
            }
        } catch (error) {
            console.log("Catch ran...", error)
            res.status(200).send({ Message: "Internal database error", error })
        }
}



module.exports = TopicCtrl;