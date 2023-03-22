import {createStore} from 'redux';
import {combineForms, createForms} from 'react-redux-form';

const initialUserState = {
    firstName: '',
    lastName: ''
};

// If you want your entire store to have the form state...
const store = createStore(combineForms({
    use:initialUserState,
}))


export default store;