import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const store = (initialState = {}) => {
  const middleWares =
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(routerMiddleware(history), apiMiddleware, thunk)
      : composeWithDevTools(applyMiddleware(routerMiddleware(history), apiMiddleware, thunk));
  return createStore(reducers(history), initialState, middleWares);
};

export default store;
