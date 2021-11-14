var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
    seen: Boolean,
    senderId: Number,
    receiverID: Number,
    sentDate: Number,
    seenDate: Number 
}, {
    timestamps: true
});

module.exports = mongoose.model('Message', MessageSchema);