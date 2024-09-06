
module.exports = (io) => {
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
}
