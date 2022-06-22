function authApi(){
    console.log("AuthApi Called");
 
    const client_id = "59395d23146582357846614acb39aa0ebc45637bd70bb73a18908a0fbdef6b3b";
    const redirect_uri = "https://orca-app-wsid4.ondigitalocean.app/";

    window.location = `https://cloud.digitalocean.com/v1/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
 
}

export default authApi;