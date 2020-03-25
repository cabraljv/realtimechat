const User = require('../models/User');

module.exports={
    async send(req,res){
        const {target} = req.query;
        const userid = jwt.verify(req.token, 'r1e2a3l4t5i6m7e');
        const userSender = await User.findById(userid);
        const userTarget = await User.findById(target);
        if(userTarget){
            userSender.friendsRequestSend.push(userTarget._id);
            userTarget.friendsRequestRecived.push(userSender._id);
            res.json({status: 200, response: 'Enviado com sucesso'})
        }else{
            res.json({status: 404, response: 'Id inexistente'})
        }
    }
}