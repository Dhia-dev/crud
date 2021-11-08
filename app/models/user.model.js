var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    bio: String,
    age :Number,
    location:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
