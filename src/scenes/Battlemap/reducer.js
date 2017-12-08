import { combineReducers } from 'redux';
//import backgroundReducer from './components/BackgroundLayer/reducer.js';

let backgroundReducer = (prevState = {}, action) => {
    return prevState;
};

const battlemapReducer = combineReducers({
    background: backgroundReducer,
    //token: tokenReducer,
});

export default battlemapReducer;
