import './App.css';
import authApi from './authApi';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import tokenApi from './tokenApi';
import './demo';
 
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
        <button className="btn btn-primary" type='button' onClick={() =>'./demo.js'}>Navigate</button>

      }
      </header>
      
    </div>
  );
}

export default App;
