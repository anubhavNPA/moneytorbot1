var express = require('express');
var path = require('path');
var server = express();
var http = require('http').Server(server);
//var router = express.Router();
var bodyParser = require('body-parser');
var builder = require('botbuilder');
var port = 3978;

//set paths for web js pages 
var index = require('./routes/index');
var bot = require('./routes/bot');

//View Engine
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);

//Set Static Folder for angular2
server.use(express.static(path.join(__dirname, 'client')));

//Body Parser middle ware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

//this path is for the http server
//dont know why is this not working
/*
server.use('/', index);
server.use('/bot', bot);
*/

server.get('/', function(req, res, next) {
    res.render('index.html');
    //res.send('hello bot');
});
server.get('/bot', function(req, res, next) {
    res.render('bot.html');
});
server.get('/api/messages', function(req, res, next) {
    //res.render('bot.html');
    console.log('i was called');
    res.json('bot is clueless');
});

server.listen(port, function() {
    console.log('Bot server live on port: '+ port);
});

/*
server.listen(process.env.port || process.env.PORT || 4200, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
*/
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MY_APP_ID,
    appPassword: process.env.MY_APP_PASSWORD
});

// Create your bot with a function to receive messages from the user
var bot = new builder.UniversalBot(connector);
// Listen for messages from users 
server.post('/api/messages', connector.listen());

//Setup for dialog
bot.dialog('/', intents);

var intents = new builder.IntentDialog();
bot.dialog('/', intents);

intents.matches(/^change name/i, [
    function (session) {
        session.beginDialog('/profile');
    },
    function (session, results) {
        session.send('Ok... Changed your name to %s', session.userData.name);
        console.log('changed name');
    }
]);

intents.matches(/^change/i, [
    function (session) {
        session.beginDialog('/profile');
    },
    function (session, results) {
        session.send('Ok... Changed your name to %s', session.userData.name);
        console.log('changed name');
    }
]);

intents.onDefault([
    function (session, args, next) {
        if (!session.userData.name) {
            session.beginDialog('/profile');
        } else {
            next();
        }
    },
    function (session, results) {
        session.send('Hello %s!', session.userData.name);
    }
]);


/*
bot.dialog('/', [
    function (session, args, next) {
        if (!session.userData.name) {
            session.beginDialog('/profile');
        } else {
            next();
        }
    },
    function (session, results) {
        session.send('Hello %s!', session.userData.name);
    }
]);
*/


bot.dialog('/profile', [
    function (session) {
        builder.Prompts.text(session, 'Hi! What is your name?');
    },
    function (session, results) {
        session.userData.name = results.response;
        session.send('recorded ur name as:', session.userData.name);
        session.endDialog();
    }
]);

module.exports = server;