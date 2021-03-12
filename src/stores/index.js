import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = (initialState = {}) => {
  const middleWares =
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(apiMiddleware, thunk)
      : composeWithDevTools(applyMiddleware(apiMiddleware, thunk));
  return createStore(reducers, initialState, middleWares);
};

export default store;
