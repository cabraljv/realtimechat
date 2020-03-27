const User = require('../models/User');
const md5 = require('md5');
const jwt = require('jsonwebtoken')

module.exports ={
    async store(req,res){
        const {username, passwd} = req.body;
        const userFind = await User.findOne({username});
        if(userFind){
            res.json({status: 401, response: "Username já utilizado"});
        }else{
            const createdUser = await User.create({
                username,
                passwd: md5(passwd),
                status: true
            });
            const token = jwt.sign(createdUser._id+"", 'r1e2a3l4t5i6m7e');
            res.json({status: 201, response: token});
        }
    },
    async show(req,res){
        const {id} = req.params;
        const userFind = await User.findById(id);
        res.json({status: 200, response:{username: userFind.username, avatar: `https://api.adorable.io/avatars/285/${userFind.username}.png`, status: userFind.status}})

    },
    async index(req,res){
        const userid = jwt.verify(req.token, 'r1e2a3l4t5i6m7e');

        const userFind = await User.findById(userid);
        var friends = []
        var friendsSend = []
        var friendsRecived = []

        for(let i=0;i<userFind.friends.length;i++){
            let finded = await User.findById(userFind.friends[i]);
            friends.push({
                id: finded._id,
                username: finded.username,
                status: finded.status,
                profile_pic: `https://api.adorable.io/avatars/285/${finded.username}.png`
            });
        }
        for(let i=0;i<userFind.friendsRequestSend.length;i++){
            let finded = await User.findById(userFind.friendsRequestSend[i]);
            friendsSend.push({
                id: finded._id,
                username: finded.username,
                status: finded.status,
                profile_pic: `https://api.adorable.io/avatars/285/${finded.username}.png`
            });
        }
        for(let i=0;i<userFind.friendsRequestRecived.length;i++){
            let finded = await User.findById(userFind.friendsRequestRecived[i]);
            friendsRecived.push({
                id: finded._id,
                username: finded.username,
                status: finded.status,
                profile_pic: `https://api.adorable.io/avatars/285/${finded.username}.png`
            });
        }

        res.json({
            status: 200, 
            response:{
                username: userFind.username, 
                avatar: `https://api.adorable.io/avatars/285/${userFind.username}.png`, 
                status: userFind.status, 
                friends, 
                friendsRequestSend: friendsSend, 
                friendsRequestRecived: friendsRecived
            }
        }); 

    }
}