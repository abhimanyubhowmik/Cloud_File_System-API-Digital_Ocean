// Load dependencies
const aws = require('aws-sdk');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');

const app = express();


// Views in public directory
app.use(express.static('src'));
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/src/App.tsx');
  });

app.listen(3000, function () {
  console.log('Server listening on port 3000.');
});