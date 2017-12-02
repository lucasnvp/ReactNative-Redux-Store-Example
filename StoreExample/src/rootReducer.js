import { combineReducers } from 'redux';
import auth from './reducers/Auth';

const rootReducer = combineReducers({
    auth
});

export default rootReducer;