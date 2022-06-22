function authApi(){
    console.log("AuthApi Called");
 
    const client_id = "4faa6988bb62a5d866f5d9d8778f0b1bda7214ec4c87da4c50d26058f2c5736a";
    const redirect_uri = "http://localhost:3000/";

    window.location = `https://cloud.digitalocean.com/v1/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
 
}

export default authApi;