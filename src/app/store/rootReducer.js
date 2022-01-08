import {combineReducers} from 'redux';
import AuthReducer from '../../features/auth/authReducer';
import eventReducer from '../../features/events/eventReducer';
import testReducer from '../../features/sandbox/testReducer';
import modalReducer from '../common/modals/modalReducer';

const rootReducer = combineReducers({
    test:testReducer,
    event:eventReducer,
    modals:modalReducer,
    auth:AuthReducer
})

export default rootReducer;