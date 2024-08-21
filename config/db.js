const mongoose = require("mongoose");
// require('dotenv').config();

const connectDB = async () => {
  // try {
  //     await mongoose.connect('mongodb://localhost:127.0.0.1:27017/chat', {
  //         useNewUrlParser: true,
  //         useUnifiedTopology: true,
  //     });
  //     console.log('MongoDB connected');
  // } catch (err) {
  //     console.error('MongoDB connection failed:', err.message);
  //     process.exit(1);
  // }
 await mongoose.connect("mongodb://127.0.0.1:27017/chat")
    .then(() => console.log("Connected!"));
};

module.exports = connectDB;
