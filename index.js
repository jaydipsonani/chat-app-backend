const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const chatHandler = require('./sockets/chatHandler');

// require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); 

connectDB();

// Create HTTP server and wrap with Socket.io
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://chat-app-fronted-seven.vercel.app/", 
        methods: ["GET", "POST"],
    },
});

chatHandler(io);

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

server.listen(5000, () => {
    console.log("Server running on 5000");
});

