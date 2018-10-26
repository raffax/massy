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
    try {
        var intento=req.body.queryResult.intent;
        if(intento.displayName=='GetWorkoutTime') {
            var tipo_fit=req.body.queryResult.parameters.Fitness;
            var inizio_attivita=req.body.queryResult.parameters('date-period').startDate;
            var fine_attivita=req.body.queryResult.parameters('date-period').endDate;
            res.json({fulfillmentText:"Hai "+tipo_fit+" da "+inizio_attivita+" a "+fine_attivita});
        }
        else res.json({fulfillmentText:"Ciao, il webhook ti saluta."});
    }
    catch(err) {
        console.log("Errore "+util.inspect(err,{showHidden: false, depth: null}));
        res.json({fulfillmentText:"Ciao, ho un errore nel webhook."});
    }
})

server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});