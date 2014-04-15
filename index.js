var config = require('./config');
var framed = require('framed-api');
var restify = require('restify');



var server = restify.createServer();
server.use(restify.bodyParser(config.server.bodyParams));


var frameController = new framed.frameAPI(server, config.framesApi);
console.log(frameController);






server.listen(config.server.port);