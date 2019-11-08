const express= require('express');
const server = express();

const helmet = require('helmet');



server.get('/',(req,res)=>{
    res.status(200).json((api:"serversup!"));
});

module.exports = server;