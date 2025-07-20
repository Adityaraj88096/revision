const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
  q: { type: String, required: true },
  image: { type: String, default: null },
  additionalQuestion: { type: String, default: null },
  additionalOptions: {
    type: [String],
    default: []
  },
  options: {
    type: [
      {
        notation: { type: String, default: null },
        statement: { type: String, default: null }
      }
    ],
    default: []
  },
  answer: { type: String, default: null },
  explaination: { type: String, default: null },
  correct: { type: Number, default: 3.0 },
  incorrect: { type: Number, default: -1.0 }
});

const SectionSchema = mongoose.Schema({
  title: { type: String, required: true }, // e.g., "VARC", "DILR", "QA"
  time: { type: Number, required: true }, // in minutes
  questions: { type: [QuestionSchema], default: [] }
});

const SscSchema = mongoose.Schema({
  exam: { type: String, required: true }, // e.g., CAT/XAT
  type: { type: String, required: true }, // e.g., "pyq", "mock"
  subtype: { type: String, required: true }, // "full" or "topic"
  set: { type: String, required: true }, // Set name
  subject: { type: String, default: null }, // if topic-wise
  year: { type: String, default: null },
  lockedSections: { type: Boolean, default: true},
  sections: { type: [SectionSchema], required: true } // NEW structure
});


module.exports = mongoose.model('Ssc', SscSchema);

