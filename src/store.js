import {combineReducers, createStore} from 'redux';
import {createForms} from 'react-redux-form';
import appReducer from "./reducer";

const initialUserState = {
    firstName: '',
    lastName: ''
};

// If you want your entire store to have the form state...
const store = createStore(combineReducers({
    output: appReducer,
    ...createForms({
        user: initialUserState,
    }),
}))

export default store;