const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"]
    }

})

// middleware
app.use(cors());




//routes middleware
app.use('/user', require('./Routes/userRouter'))




app.get('/', (req, res) => res.send('hello')) //checking purpose route



io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on("disconnect", () => {
        console.log("user Disconnected", socket.id);
    })
})



const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`server listen to port ${PORT}`);
})