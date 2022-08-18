import './App.css';
import authApi from './authApi';
import {useNavigate} from 'react-router-dom'
import { SetStateAction, useState } from 'react';
import tokenApi from './tokenApi';
import delete_file from './delete_file';
import upload_file from './upload_file';
import download_file from "./download_file";

function App() {
  const regex = /code=(.*)/gm;

  const str = window.location.href;
  let code;
  let token_code="";
  const [check,setCheck]=useState(false)
  
  const [message, setMessage] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setMessage(event.target.value);

    //console.log('value is:', event.target.value);
  };

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
          
        <input type="text" name="del" onChange={handleChange} value={message} placeholder="Enter the file name"></input><br></br>
        <button className="btn btn-primary" type='button' onClick={() => delete_file(message)}>Delete</button><br></br>
        <button className="btn btn-primary" type='button' onClick={() => upload_file()}>Upload</button><br></br>
        <button className="btn btn-primary" type='button' onClick={() => download_file(message, "1")}>Download</button><br></br>
        <button className="btn btn-primary" type='button' onClick={() => download_file(message, "0")}>Share(Copy to Clipboard)</button>
        </div>

        
      }
      </header>
      
    </div>
  );
}

export default App;


