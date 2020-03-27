const User = require('../models/User');
const Message = require('../models/Message');
const jwt = require('jsonwebtoken')

module.exports = {
    async store(req,res){
        const {content, receiverId} = req.body;
        const senderId = jwt.verify(req.token, 'r1e2a3l4t5i6m7e');

        const sender = await User.findById(senderId);
        const receiver = await User.findById(receiverId);

        if(sender.friends.includes(receiverId)){
            if(sender && receiver){
                const newMessage = await Message.create({
                    content,
                    sender: senderId,
                    receiver: receiverId,
                });
                res.json({status: 201, response: 'Menssagem enviada com sucesso'})

                const senderSocket = req.connectedClients[senderId]
                const targetSocket = req.connectedClients[receiverId]

                req.io.to(senderSocket).emit('message', newMessage)
                req.io.to(targetSocket).emit('message', newMessage)
            }else{
                res.json({status: 404, response: 'Usuário inexistente'}) 
            }
            
        }else{
            res.json({status: 401, response: 'Amizade não estabelecida'}) 
        }
        

    },
    async index(req,res){
        const {receiverId} = req.query;
        const senderId = jwt.verify(req.token, 'r1e2a3l4t5i6m7e');
        const messages = await Message.find({
            $or:[
                
                {sender: senderId, receiver: receiverId},
                {sender: receiverId, receiver: senderId},
                
            ]
        });

        res.json({status: 200, response: messages});

    }
}