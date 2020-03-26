const User = require('../models/User');
const jwt = require('jsonwebtoken')

module.exports={
    async send(req,res){
        const {target} = req.query;
        const userid = jwt.verify(req.token, 'r1e2a3l4t5i6m7e');
        const userSender = await User.findById(userid);
        const userTarget = await User.findById(target);
        if(userTarget){
            if(!userSender.friends.includes(userTarget._id)){
                if(!userSender.friendsRequestRecived.includes(userTarget._id)){
                    userSender.friendsRequestSend.push(userTarget._id);
                    userTarget.friendsRequestRecived.push(userSender._id);
                    await userSender.save();
                    await userTarget.save();
                    res.json({status: 200, response: 'Enviado com sucesso'})
                }else{
                    res.json({status: 401, response: 'Pedido de amizade já recebido'})
                }
            }else{
                res.json({status: 402, response: 'Amizade já estabelecida'})
            }
        }else{
            res.json({status: 404, response: 'Id inexistente'})
        }
    },
    async accept(req,res){
        const {target} = req.query;
        const userid = jwt.verify(req.token, 'r1e2a3l4t5i6m7e');
        const currentUser = await User.findById(userid);
        const userTarget = await User.findById(target);
        if(currentUser && userTarget){
            if(currentUser.friendsRequestRecived.includes(target)){

                currentUser.friends.push(target);
                var index = currentUser.friendsRequestRecived.indexOf(target);
                currentUser.friendsRequestRecived.splice(index, 1);
    
                userTarget.friends.push(userid);
                index = userTarget.friendsRequestSend.indexOf(userid);
                userTarget.friendsRequestSend.splice(index, 1);
    
                currentUser.save();
                userTarget.save();
    
                res.json({status: 200, response: "Amizade aceita com sucesso"});
    
            }else{
                res.json({status: 400, response: "erro"});
            }
        }else{
            res.json({status: 440, response: "Usuários inválidos"});
        }
        

    }
}