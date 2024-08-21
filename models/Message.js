const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    author: String,
    room: String,
    sender: String,
    message: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
