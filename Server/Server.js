const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const moment = require('moment')

const app = express()

//MiddleWares
app.use(express.json())
app.use(cors())


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin:"*",
        methods: ['GET', 'POST']
    }
})

//GET TIME TODAY

io.on("connection", (socket) => {
    console.log(`User is connected ${socket.id}`)

    //Recieving Messages
    socket.on("sendMessage", (data) => {
        io.emit('recieveMessage', {message: data.message, time: new Date().toLocaleTimeString(), sender: socket.id})
    })
    
    //handles typing
    socket.on('handle-typing', (data) => {
        socket.broadcast.emit('receive-typing', (data))
    })


    //User Disconnect
    socket.on("disconnect", () => {
        console.log(`client disconnected ${socket.id}`)
    })
})

server.listen(3000, () => {
    console.log("server is running")
})