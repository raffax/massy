var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
server       = express()
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
const {WebhookClient} = require('dialogflow-fulfillment')

server.get('/',function(req,res){
    res.send('We are happy to see you using Chat Bot Webhook');
    console.log("Accesso GET ");
});
server.post('/',function(req,res){   
    console.log("HOOK STARTED");   
    if(req.body.result == null) {
        console.log("Error, request empty");
        res.json("Errore xxx");
    }
    console.log("request is ok");
    const agent = new WebhookClient({ request, response });
    agent.add("Bel tempo qui");
})

server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});