const express = require("express");
const http = require("http");
const { PORT } = require("./config/main_configs");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);


io.on('connection', () => {});

server.listen(PORT, ()=>{
    console.log(`application is running on ${PORT}`);
})