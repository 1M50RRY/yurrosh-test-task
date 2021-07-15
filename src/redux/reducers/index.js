import { combineReducers } from 'redux'
import TestReducer from './testReducer'

const allReducers = combineReducers({
    test: TestReducer
});

export default allReducers;