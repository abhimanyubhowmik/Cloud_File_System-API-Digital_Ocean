import './App.css';
import authApi from './authApi';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import tokenApi from './tokenApi';

 
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
 
  


  return (
    <div className="App">
      <header className="App-header">

        {
          token_code === "" 
          ?<button className="btn btn-primary" type='button' onClick={() => authApi()}>Authenticate</button>
          :<button className="btn btn-primary" type='button' onClick={() => tokenApi(token_code,setCheck,check)}>Get Token</button>
          
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
