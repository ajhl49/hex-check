import { createStore, combineReducers } from 'redux';
import hexcheckReducer from './reducer';

// https://github.com/alexmngn/react-feedback-form/blob/master/src/store.js

let store = createStore(hexcheckReducer);

const unsubscript = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({type: 'test', text: 'abcd'});

export default store;
