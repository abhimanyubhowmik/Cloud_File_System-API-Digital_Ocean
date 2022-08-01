var S3 = require('amazon-s3');

function Spaces(config) {
    config.domain = 'digitaloceanspaces.com'
    S3.call(this, config)
}

Spaces.prototype = Object.create(S3.prototype);
Spaces.prototype.constructor = Spaces;
var Spaces = require('digitalocean-spaces')
global.fetch = require('node-fetch')

var spaces = new Spaces({
    accessKey: '<private accessKey>',
    secretKey: '<private secretKey>',
    region: 'nyc3'
});

(async function() {
    try {

        let bucket = 'testbucket';
        let key = '/a/test/file.txt';
        let body = 'test file contents';

        let putResponse = await spaces.putObject({bucket, key, body})

        console.log(`put status: ${putResponse.status}`)
        console.log(`put response body: '${await putResponse.text()}'`)

        let getResponse = await spaces.getObject({bucket, key});

        console.log(`get status: ${getResponse.status}`)
        console.log(`get response body: '${await getResponse.text()}'`)

        let delResponse = await spaces.deleteObject({bucket, key});

        console.log(`del status: ${delResponse.status}`)
        console.log(`del response body: '${await delResponse.text()}'`)
    }
    catch (ex) {
        console.log(ex)
    }
}());

module.exports = Spaces