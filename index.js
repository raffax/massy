var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
server       = express()
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.get('/',function(req,res){
    res.send('We are happy to see you using Chat Bot Webhook');
});
server.post('/',function(req,res){  
    if (req.body.result.action == "chetempochefa") {
        res.json({
            speech: "Tempo bellissimo,sole a volontà",
            displayText: "Tempo bellissimo,sole a volontà",
            source: 'chetempochefa'
        });
    }
    else {
        res.json({
            speech: "Boh",
            displayText: "Boh",
            source: req.body.result.action
        });
    }
})

server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});