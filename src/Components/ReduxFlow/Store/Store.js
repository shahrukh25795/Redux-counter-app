import {createStore, combineReducers} from 'redux';
import Increment from '../Reducer/IncrementCount';

const rootReducers = combineReducers(
    {
        increment : Increment,
   }
);

export default createStore(rootReducers)