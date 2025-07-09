const mongoose = require('mongoose');
const CountdownSchema = mongoose.Schema({
    exam: {
        type:[
             {
                examName: {
                    type: String,
                    required: true,
                },
                examDate: {
                    type: Date,
                    required: false
                },
                tag: {
                    type: String,
                    required: false
                }
            }  //Exam Name such as CAT/XAT/CMAT etc.

        ]
    },
});

module.exports = mongoose.model('Countdown', CountdownSchema);

