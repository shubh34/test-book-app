import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';
import configureStore, { history } from './stores';

const store = configureStore();

function App() {
  return (
    <main className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>Heya</div>
        </ConnectedRouter>
      </Provider>
    </main>
  );
}

export default App;
