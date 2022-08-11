import './App.css'
import { S3 } from "@aws-sdk/client-s3";

function main(){
    const s3Client = new S3({
    endpoint: "https://fra1.digitaloceanspaces.com",
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.SPACES_KEY,
      secretAccessKey: process.env.SPACES_SECRET
    }
    
});
console.log('Ready');
}

export default main;
    