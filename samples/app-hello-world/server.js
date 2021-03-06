var databox = require('node-databox');
const https = require('https');
const fs = require('fs');

const store = process.env.DATABOX_STORE_ENDPOINT;

//My https cred generated by the container manager
const credentials = databox.getHttpsCredentials()


//start the https server for the App UI
https.createServer(credentials, function (req, res) {
  //The https server is setup to offer the  UI for your App
  //you can use any framework you like to display the interface.
  res.writeHead(200);
  res.end("<html><body><h1>hello world! from a databox app</h1></body></html>\n");
}).listen(8080);