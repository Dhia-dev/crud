var mongoose = require('mongoose');

var PayementSchema = mongoose.Schema({
    description: String,
    payementId: Number,
    amount: Number,
    payement_date: Number,
    userId: Number 
}, {
    timestamps: true
});

module.exports = mongoose.model('Payement', PayementSchema);