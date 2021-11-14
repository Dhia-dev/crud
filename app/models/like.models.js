var mongoose = require('mongoose');

var LikeSchema = mongoose.Schema({
    likeId: Number,
    ClikeDate: Number,
    seen : Boolean
   
}, {
    timestamps: true
});

module.exports = mongoose.model('Like', LikeSchema);