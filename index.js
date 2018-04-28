var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
server       = express()
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.get('/',function(req,res){
    res.send('We are happy to see you using Chat Bot Webhook');
    console.log("Accesso GET ");
});
server.post('/',function(req,res){   
    console.log("HOOK STARTED");   
    if(req.body.result) console.log(JSON.stringify(req.body.result));
    if (req.body.result && req.body.result.action && req.body.result.action == "chetempochefa") {
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