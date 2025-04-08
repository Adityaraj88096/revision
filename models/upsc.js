const mongoose = require('mongoose');
const UpscSchema = mongoose.Schema({
    exam: {
        type: String,  //Exam Name
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
                additionalQuestion: {
                    type: String,
                    required: false,
                    default: null,
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
                }
            }
        ],
        default: []
    }
});

module.exports = mongoose.model('Upsc', UpscSchema);

                // additionalOptionA: {
                //     type: String,
                //     required: false,
                //     default: null
                // },
                // additionalOptionB: {
                //     type: String,
                //     required: false,
                //     default: null
                // },
                // additionalOptionC: {
                //     type: String,
                //     required: false,
                //     default: null
                // },
                // additionalOptionD: {
                //     type: String,
                //     required: false,
                //     default: null
                // },
                // additionalOptionE: {
                //     type: String,
                //     required: false,
                //     default: null
                // },
             
                // a: {
                //     type: String,
                //     required: false,
                //     default: null
                // },
                // b: {
                //     type: String,
                //     required: false,
                //     default: null
                // },
                // c: {
                //     type: String,
                //     required: false,
                //     default: null
                // },
                // d: {
                //     type: String,
                //     required: false,
                //     default: null
                // },
                // e: {
                //     type: String,
                //     required: false,
                //     default: null
                // },
       