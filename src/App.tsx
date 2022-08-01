import './App.css';
import authApi from './authApi';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import tokenApi from './tokenApi';

 
function App() {
  
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
          :!check ?<button className="btn btn-primary" type='button' onClick={() => tokenApi(token_code,setCheck,check)}>Get Token</button>
          
        :
        <div>
        <h1>DigitalOcean Spaces Tutorial</h1>
        
        <p>Please select a file and submit the form to upload an asset to your DigitalOcean Space.</p>
        
        <form method="post" encType="multipart/form-data" action="/upload">
          <label htmlFor="file">Upload a file</label>
          <input type="file" name="upload"/>
          <input type="submit" className="button"/>
        </form>
        
        </div>
      }
      </header>
      
    </div>
  );
}

export default App;
