const Message = require('../models/Message');

const chatHandler = (io) => {
    io.on("connection", (socket) => {
        console.log("Connected:", socket.id);

        socket.on("join_room", async (room) => {
            socket.join(room);
            console.log(`User with ID: ${socket.id} joined room: ${room}`);

            // Retrieve previous messages for the room
            try {
                const previousMessages = await Message.find({ room }).sort({ timestamp: 1 });
                socket.emit("previous_messages", previousMessages);
            } catch (err) {
                console.error('Error fetching previous messages:', err);
            }
        });

        socket.on('send_message', async (data) => {
            const newMessage = new Message({
                room: data.room,
                sender: data.sender,
                message: data.message,
                author: data.author
            });

            try {
                await newMessage.save();
                // console.log('Message saved to DB:', data.message);
            } catch (err) {
                console.error('Error saving message to DB:', err);
            }

            // Emit the message to other users in the room
            socket.to(data.room).emit("receive-message", data);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });
};

module.exports = chatHandler;
