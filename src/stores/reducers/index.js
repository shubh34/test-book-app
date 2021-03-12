import { combineReducers } from 'redux';
import books from '../../states/books/reducer';
import applicationConfig from '../../states/applicationConfig/reducer';

export default combineReducers({
  books,
  applicationConfig
});
