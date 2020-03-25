const User = require('../models/User');
const md5 = require('md5');
const jwt = require('jsonwebtoken')

module.exports ={

    async store(req,res){
        const {username, passwd} = req.body;
        const userFind = await User.findOne({username, passwd: md5(passwd)});
        if(userFind){
            const token = jwt.sign(userFind._id+"", 'r1e2a3l4t5i6m7e');
            await User.updateOne({_id: userFind._id}, {status: true});
            res.json({status: 202, response: token});
        }else{
            res.json({status: 401, response: "Username ou senha incorretos"});
        }
    },

}