import { combineReducers } from 'redux';

import auth from './auth';
import blog from './blog';
import page from './page';
export default combineReducers({
    auth,
    blog,
    page
});