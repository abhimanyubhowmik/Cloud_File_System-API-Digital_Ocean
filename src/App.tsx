import './App.css';
import authApi from './authApi';
import tokenApi from './tokenApi';
 
function App() {
  const regex = /code=(.*)/gm;

  const str = window.location.href;
  let code;
  let token_code="";

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
          token_code == "" 
          ?<button className="btn btn-primary" type='button' onClick={() => authApi()}>Authenticate</button>
          :<button className="btn btn-primary" type='button' onClick={() => tokenApi(token_code)}>Get Token</button>
        }
      </header>
    </div>
  );
}

export default App;
