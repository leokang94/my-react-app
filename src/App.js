import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello World! My React App!</h1>
          </header>
          <body>
            <button onClick={signOut}>Sign Out</button>
          </body>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
