function tokenApi(token_code){
    const client_id = "59395d23146582357846614acb39aa0ebc45637bd70bb73a18908a0fbdef6b3b";
    const client_secret = "16ae3d70349cec0e18314c9b3f1d69c1b747e3d024fc09bd67b0ddd312501511";
    const redirect_uri = "https://orca-app-wsid4.ondigitalocean.app/";
    const code = token_code;

    // console.log("Code: "+code); 

    fetch(`https://cloud.digitalocean.com/v1/oauth/token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirect_uri}`, {
        "method": "POST"
    })
    .then(response=> response.json())
    .then(response => {
        console.log(response);
    })
    .catch(err => { 
        console.log(err);
    });
}

export default tokenApi;