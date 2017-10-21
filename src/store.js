import { createStore, combineReducers } from 'redux';

// https://github.com/alexmngn/react-feedback-form/blob/master/src/store.js

// import { reducer as battlemapRecuder} from ./scenes/Battlemap/reducer

let noopReducer = (prevState={}, action) => {
    return prevState;
};

const appReducer = combineReducers({
    noopReducer,
    //Battlemap: battlemapReducer
});

export default createStore(
    appReducer
);
