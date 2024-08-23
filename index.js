const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const chatHandler = require('./sockets/chatHandler');

const app = express();
app.use(cors());

app.use(express.json()); 

connectDB();

// Create HTTP server and wrap with Socket.io
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://jaydip-chat-app.netlify.app", 
        methods: ["GET", "POST"],
    },
});

chatHandler(io);


server.listen(5000, () => {
    console.log("Server running on 5000");
});

