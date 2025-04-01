const mongoose = require('mongoose');
const PYQSchema = mongoose.Schema({
    exam: {
        type: String,
    },
    subject: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: null,
    },
    pyq: {
        type: String,
        default: true,
    },
    time: {
        type: Number,
        default: null,
    },
    questionArray: {
        type: [
            {
                q: {
                    type: String,
                    required: true
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

module.exports = mongoose.model('Pyqs', PYQSchema);

