import './App.css'
import { S3 } from "@aws-sdk/client-s3";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

async function delete_file(){
    const s3Client = new S3({
    endpoint: "https://fra1.digitaloceanspaces.com",
    region: "us-east-1",
    credentials: {
      accessKeyId: "DO00BQRW33FHKVXXTQ2N",
      secretAccessKey: "CK8wnGQ/VvMRye1ZcAfSUoNHm5ID3w4zOBenVzkwu44"
    }
    
});

console.log('Ready');
 const bucketParams = { Bucket: "testingspace11", Key: "landscape.jpg" };
try {
  const data = await s3Client.send(new DeleteObjectCommand(bucketParams));
  console.log("Success", data);
  return data;
} catch (err) {
  console.log("Error", err);
}

}

export default delete_file;
    