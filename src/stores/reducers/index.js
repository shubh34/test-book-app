import { combineReducers } from 'redux';
import books from '../../states/books/reducer';
import applicationConfig from '../../states/applicationConfig/reducer';
import { connectRouter } from 'connected-react-router';

export const reducers = (history: Object) =>
  combineReducers({
    books,
    applicationConfig,
    router: connectRouter(history)
  });
export default reducers;
