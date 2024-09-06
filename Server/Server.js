const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const moment = require('moment')
const socketChatController = require('./Controller/ChatSocketController')
const AuthRouter = require('./Routes/Auth')

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

//API ENDPOINTS
app.use('/api/testing', AuthRouter)

//WEB SOCKETS
socketChatController(io)

server.listen(3000, () => {
    console.log("server is running")
})