import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from '../../stores';
import { AppLayout } from '../AppLayout';
import { StyledMain } from './styles.js';

const store = configureStore();

export const App = () => {
  return (
    <StyledMain className="App">
      <Suspense fallback={<div />}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <AppLayout />
          </ConnectedRouter>
        </Provider>
      </Suspense>
    </StyledMain>
  );
};

export default App;
