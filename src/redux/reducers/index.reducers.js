import counterReducer from './counter.reducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer
});

export default allReducers;