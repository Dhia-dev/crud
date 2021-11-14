var mongoose = require('mongoose');

var ChatSchema = mongoose.Schema({
    Chat_id: Number,
    Creation_date: Number
   
}, {
    timestamps: true
});

module.exports = mongoose.model('Chat', ChatSchema);