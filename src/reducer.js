import { combineReducers } from 'redux';
import battlemapReducer from './scenes/Battlemap/reducer';

const hexcheckReducer = combineReducers({
    battlemap: battlemapReducer,
    testing: (prevState = {}, action) => {
        console.log(action);
        return prevState;
    }
});

export default hexcheckReducer;
