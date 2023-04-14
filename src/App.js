import { useState } from 'react';
import './index.css';

function App() {

  
  const [login, setLogin] = useState(true);

  function status(){
    setLogin(!login);
  }

  return (
    <div className="App">
      <button onClick={status}>{login? "Logout": "Login"}</button>
      {login? (<div>
              <h1 className='true'>"You are logged in!"</h1>
              <h2>"Hello</h2>
              </div>)
      : <h1 className='false'>"You are not logged in"</h1>}
    </div>
  );
}

export default App;
