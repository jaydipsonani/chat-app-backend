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
 await mongoose.connect("mongodb+srv://jaydipsonanicloudus24:wKsbDX4QKQSNUiY7@socket-chat-db.neq5f.mongodb.net/?retryWrites=true&w=majority&appName=socket-chat-db/chat")
    .then(() => console.log("mongodb connected!"));
};

module.exports = connectDB;
