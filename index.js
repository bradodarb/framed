var frames = require('framed-api');
var config = require('./config');


var restify = require('restify');

var server = restify.createServer();

server.use(restify.bodyParser({
    maxBodySize: 0,
    mapParams: true,
    mapFiles: false,
    overrideParams: false
}));


var frameController = new frames.frameAPI(server, config.framesApi);



console.log(frameController);



var validate = require('jsonschema').validate;
console.log(validate(4, {"type": "number"}));


server.listen(8083);

