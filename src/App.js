import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';
import configureStore, { history } from './stores';
import { AppLayout } from './containers/AppLayout';


const store = configureStore();

export const App = () => {
  return (
    <main className="App">
      <Suspense fallback={<div/>}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <AppLayout />
          </ConnectedRouter>
        </Provider>
      </Suspense>
    </main>
  );
};

export default App;
