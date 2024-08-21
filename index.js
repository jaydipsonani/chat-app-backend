const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io")
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("socket id", socket.id)

    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`User with Id: ${socket.id} User joined room id: ${data}`)
    })

    socket.on('send_message', (data) => {
        socket.to(data.room).emit("receive-message",data)
    })

    socket.on("disconnect", () =>{
        console.log("user disconnected", socket.id)
    })
})

server.listen(5000, () => {
    console.log("Server is running on port 5000");
})
