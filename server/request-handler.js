
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

var storage = {};  
storage.results = [];
var objectId = 1;

//var messages = [{username: 'eric', text: 'this is my hello!', objectId: objectId}]


var requestHandler = function(request, response) {  
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  
  const { method, url } = request;
  let returnData;
  let baseUrl = url.split('?')[0];
  
  if (baseUrl === '/classes/messages') {
    if (method === 'GET') {
      statusCode = 200;
      returnData = storage; //on GET the returnData will store all messages in results
    }
    if (method === 'POST') {
      var stringMessage = ''; 
      statusCode = 201;
      request.on('data', function(chunk) {
        stringMessage += chunk;
      });
      request.on('end', () => {
        stringMessage = JSON.parse(stringMessage);
        //on POST the returnData will grab just the one message
        stringMessage.objectId = objectId;
        returnData = stringMessage;
        objectId++;
        storage.results.push(stringMessage);    
      });
    }  
    if (method === 'OPTIONS') {
      statusCode = 200;
      response.writeHead(statusCode, headers);
      response.end(null);
    }  
  } else {
    statusCode = 404;
  }
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(returnData));
};

module.exports.requestHandler = requestHandler;