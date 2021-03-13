import { combineReducers } from 'redux';
import books from '../../states/books/reducer';
import applicationConfig from '../../states/applicationConfig/reducer';
import { connectRouter } from 'connected-react-router';

export const reducers = (history: Object) =>
  combineReducers({
    router: connectRouter(history),
    books,
    applicationConfig
  });
export default reducers;
