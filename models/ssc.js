const mongoose = require('mongoose');
const SscSchema = mongoose.Schema({
    exam: {
        type: String,  //Exam Name such a Ssc/XAT/CMAT etc.
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
    set: {
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
        type: [
            {
                type: Number,
                default: null
            }
        ],
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
                additionalQuestion: {
                    type: String,
                    required: false,
                    default: null,
                },
                additionalOptions: {
                    type: [
                            {
                                type: String,
                                required: false,
                                default: null
                        },
                    ],
                    default: []
                },
                options: {
                    type: [
                        {
                            notation:{
                                type: String,
                                required: false,
                                default: null
                            },
                            statement: {
                                type: String,
                                required: false,
                                default: null
                            },
                        },
                    ],
                    default: [],
                },
         answer: {
                    type: String,
                    required: false,
                    default: null
                },
                explaination: {
                    type: String,
                    required: false,
                    default: null
                },
                correct: {
                    type: Number,
                    required: false,
                    default: null
                 },
                 incorrect: {
                    type: Number,
                    required: false,
                    default: null
                 }
            }
        ],
        default: []
    }
});

module.exports = mongoose.model('Ssc', SscSchema);

