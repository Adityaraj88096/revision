const mongoose = require('mongoose');
const TopicSchema = mongoose.Schema({
    topics: {
        type: Array,
    },
    date: {
        type: String,
    },
});

module.exports = mongoose.model('Topics', TopicSchema);

