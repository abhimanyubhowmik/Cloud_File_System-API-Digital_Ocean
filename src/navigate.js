const express = require('express');
const app = express();
const aws = require('aws-sdk');
const cors = require('cors');
app.use(express.json());
require("dotenv").config();

app.use(cors());

const port = process.env.PORT || 3000;

const bucketName = "test-uploads";
const dspaces = new aws.Endpoint ("fra1.digitaloceanspaces.com")
const s3 = new aws.S3({
    endpoint: dspaces,
    accessKeyId :process.env.SPACES_ACCESS_KEY_ID,
    secretAccessKey: process.env.SPACES_SECRET_ACCESS_KEY
,});
app.get('upload',async(req,res) =>{
    const key = `${Date.now()}.mp4`;
    const s3Params ={
        Bucket : bucketName,
        Key : key,
        Expires: 1800,
        ContentType: "video/mp4"
    };
    try{
        const uploadURL = await s3.getSignedUrlPromise("putObject",s3Params)
        res.json({url : uploadURL, name: key});
    }
    catch(e){
        console.log(e);
    }
    res.status(200);
});
app.get("/download",async(req,res) =>{ 
    const key = req.query.key;
    const s3Params={
        Bucket : bucketName,
        Key: key,
    }
    const getURL = await s3.getSignedUrlPromise("getObject",s3Params);
    res.json({url :getURL});
});
app.listen(port, () =>{
    console.log("Server Started")
}) 