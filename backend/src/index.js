const express = require('express');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect('mongodb+srv://realtimechat:tahcemitlaer@cluster0-q4xjo.mongodb.net/realtimechat?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true })
const routes = require('./routes');
const User = require('./models/User')

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

var connectedClients = {}

io.on('connection', async socket => {
    const { token } = socket.handshake.query
    try{
        const user = jwt.verify(token, 'r1e2a3l4t5i6m7e');
        const userFind = await User.findById(user);
        
        userFind.status = true;
        userFind.save();
        connectedClients[user] = socket.id
        console.log(user+ ' Conected')
        socket.on('disconnect', socket => {
            userFind.status = false;
            userFind.save();
            connectedClients[user] = undefined;
            console.log(user + ' desconectado')
        })
    }catch(error){
        console.log(error)
    }
})


app.use((req, res, next) => {
    req.io = io;
    req.connectedClients = connectedClients;
    req.chats = [];
    next();
});

app.use(cors());
app.use(express.json());

app.use(routes);


server.listen(3333);


