const mongoose = require('mongoose');
// require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/chat', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

