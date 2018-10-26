var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
server       = express()
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const util = require('util')


server.get('/',function(req,res){
    res.send('We are happy to see you using Chat Bot Webhook');
    console.log("Accesso GET ");
});
server.post('/',function(req,res){   
    console.log("HOOK STARTED"); 
    console.log(util.inspect(req.body, {showHidden: false, depth: null}))
    res.json({fulfillmentText:"Ciao!"});
})

server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});