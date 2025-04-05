const mongoose = require('mongoose');
const BankSchema = mongoose.Schema({
    exam: {
        type: String,  //Exam Name such as CAT/XAT/CMAT etc.
        required: true,
    },
    type: {
        type: String, //Pyq or mock
        required: true
    },
    subtype: {
        type: String, //Full or topic wise
        required: true,
    },
    set:{
        type: String, //Set name
        required: true,
    },
    subject: {
        type: String, //If it is a topic wise test
        default: null
    },
    year: {
        type: String, //Year of exam
        default: null,
    },
    time: {
        type: Number, //Length of test
        default: null,
    },
    questionArray: {
        type: [
            {
                q: {
                    type: String,
                    required: true
                },
                image: {
                    type: String,
                    required: false,
                    default: null
                },
                additionalOptionA: {
                            type: String,
                            required: false,
                            default: null
                },
                additionalOptionB: {
                    type: String,
                    required: false,
                    default: null
                },
                additionalOptionC: {
                    type: String,
                    required: false,
                    default: null
                },
                additionalOptionD: {
                    type: String,
                    required: false,
                    default: null
                },
                additionalOptionE: {
                    type: String,
                    required: false,
                    default: null
                },
                additionalQuestion: {
                    type: String,
                    required: false,
                    default: null,
                },
                a: {
                    type: String,
                    required: false,
                    default: null
                },
                b: {
                    type: String,
                    required: false,
                    default: null
                },
                c: {
                    type: String,
                    required: false,
                    default: null
                },
                d: {
                    type: String,
                    required: false,
                    default: null
                },
                e: {
                    type: String,
                    required: false,
                    default: null
                },
                ans: {
                    type: String,
                    required: false,
                    default: null
                },
                exp: {
                    type: String,
                    required: false,
                    default: null
                }
            }
        ],
        default: []
    }
});

module.exports = mongoose.model('Bank', BankSchema);

