const express = require('express');
const cors = require('cors');


const app = express();
const http = require('http').Server(app);

const port = 4000;

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user connected`);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
});

app.get('/api', ( req, res ) => {
    res.status(200).json({ message: 'hello' });
});

http.listen(port, () => {
    console.log(`Listening on port ${port}`);
})