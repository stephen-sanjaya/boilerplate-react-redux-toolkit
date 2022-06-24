import {combineReducers} from '@reduxjs/toolkit';
import counterReducer  from  '../components/counter/CounterSlice';


export default combineReducers({
    counter : counterReducer
});

