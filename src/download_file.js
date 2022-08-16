import { GetObjectCommand } from "@aws-sdk/client-s3";
//import { writeFileSync } from "fs";
import { S3 } from "@aws-sdk/client-s3";

async function download_file(){
    const s3Client = new S3({
    endpoint: "https://fra1.digitaloceanspaces.com",
    region: "us-east-1",
    credentials: {
      accessKeyId: "DO00BQRW33FHKVXXTQ2N",
      secretAccessKey: "CK8wnGQ/VvMRye1ZcAfSUoNHm5ID3w4zOBenVzkwu44"
    }
    
});
console.log('Ready');
const bucketParams = {
    Bucket: "testingspace11",
    Key: "example.txt"
  };
  
  // Function to turn the file's body into a string.
  const streamToString = (stream) => {
    const chunks = [];
    return new Promise((resolve, reject) => {
      stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      stream.on('error', (err) => reject(err));
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
  };
  
  try {
    const response = await s3Client.send(new GetObjectCommand(bucketParams));
    console.log("Inside try block1");
    console.log(response.Body);
    console.log("Inside try block2");
    
    //const data = await streamToString(response.Body);
    //writeFileSync("downloaded-file.txt", data);
    //console.log("Success", data);
    //return data;
    return "test";
  } catch (err) {
    console.log("Error", err);
  }

}
export default download_file;