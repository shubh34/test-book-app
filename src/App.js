import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import configureStore from './stores';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button name="Heya Button" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Provider>
    </div>
  );
}

export default App;
