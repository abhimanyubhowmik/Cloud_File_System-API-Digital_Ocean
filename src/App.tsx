import './App.css';
import authApi from './authApi';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

 
function App() {
  let Navigate = useNavigate()
  const regex = /code=(.*)/gm;

  const str = window.location.href;
  let code;
  let token_code="";
  const [check,setCheck]=useState(false)
  

  while ((code = regex.exec(str)) !== null) {
      if (code.index === regex.lastIndex) {
          regex.lastIndex++;
      }
      
      code.forEach((match, groupIndex) => {
          // console.log(`Found match, group ${groupIndex}: ${match}`);
          token_code = match;
      });
  }
  function tokenApi(token_code:any){
    const client_id = "4faa6988bb62a5d866f5d9d8778f0b1bda7214ec4c87da4c50d26058f2c5736a";
    const client_secret = "ad81881a417c790cad0c3c1ee4c0655de2b5849e3f247b0d0d8a7048ffe62740";
    const redirect_uri = "(https://squid-app-yfz8f.ondigitalocean.app/";
    const code = token_code;
    

    // console.log("Code: "+code); 

    fetch(`https://cloud.digitalocean.com/v1/oauth/token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirect_uri}`, {
        "method": "POST"
    })
    
    .then(response => response.json())
    .then(response => {
        console.log(response);
       if(response)
        setCheck(true)
        console.log(check);
        
    })
    .catch(err => { 

        console.log(err);
    });
    
}
  


  return (
    <div className="App">
      <header className="App-header">

        {
          token_code === "" 
          ?<button className="btn btn-primary" type='button' onClick={() => authApi()}>Authenticate</button>
          :<button className="btn btn-primary" type='button' onClick={() => tokenApi(token_code)}>Get Token</button>
          
        }
         { check&&<div>
        <input 
                                className="upload-path"
                                type="text"                                
                                placeholder="Enter Bucket Name"
                                name="bucketName"
                                
                            />
                            <button 
                                className="browser"
                                type="button"
                                onClick={()=>{
                                    
                                }}
                                >
                                    <span>Choose File</span>
                            </button>
      </div>

      }
      </header>
      
    </div>
  );
}

export default App;
