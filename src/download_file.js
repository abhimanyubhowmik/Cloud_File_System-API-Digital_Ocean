import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { S3 } from "@aws-sdk/client-s3";

async function download_file(data, boolData){
    const s3Client = new S3({
    endpoint: "https://fra1.digitaloceanspaces.com",
    region: "us-east-1",
    credentials: {
      accessKeyId: "DO00BQRW33FHKVXXTQ2N",
      secretAccessKey: "CK8wnGQ/VvMRye1ZcAfSUoNHm5ID3w4zOBenVzkwu44"
    }
    
  });
  
  console.log(data);
  
  const bucketParams = {
    Bucket: "testingspace11",
    Key: data
  };
  
  try {
    const url = await getSignedUrl(s3Client, new GetObjectCommand(bucketParams), { expiresIn: 15 * 60 });
    console.log("URL:", url);
    if(boolData=="1"){
      //download
      window.location = url;
    }else{
      //share
      navigator.clipboard.writeText(url);
    }
    return url;
  } catch (err) {
    console.log("Error", err);
  }

}
export default download_file;