const mongoose = require('mongoose');
const CountdownSchema = mongoose.Schema({
    
                name: {
                    type: String,
                    required: true,
                },
                category: {
                    type: String,
                    required: false
                },
                phase: {
                    type: String,
                    required: false
                },
                date: {
                    type: Date,
                    required: true
                },
                isActive: {
                    type: Boolean,
                    default: true
                }
});

module.exports = mongoose.model('Countdown', CountdownSchema);

