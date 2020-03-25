const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');
const jwt = require('jsonwebtoken');
const FriendController = require('./controllers/FriendController');

async function verifyToken(req, res, next) {
    const bearerHeader = await req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
        req.token = bearerHeader;
        jwt.verify(req.token, 'r1e2a3l4t5i6m7e', (err, dec) => {
        if (err) {
            res.json({ cod: 403, response: "Invalid token" });
        } else {
            next();
        }
        });  
    } else { 
        res.json({ cod: 403, response: "Invalid token" });
    }
}

routes.get('/',(req,res)=>{
    res.json({status: 200, response: "OK"});
})
routes.post('/user/create', UserController.store);
routes.post('/user/login', LoginController.store);
routes.get('/user/:id',verifyToken, UserController.show);
routes.get('/user',verifyToken, UserController.index);
routes.get('/friend/send', FriendController.send);

module.exports = routes;