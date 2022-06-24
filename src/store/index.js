import {configureStore} from '@reduxjs/toolkit'
import {localStorageMiddleware} from '../middlewares/middleware'
import rootReducer from './rootReducer'

export function createStore(initialState) {
    const store = configureStore({
        reducer : rootReducer,
        middleware : [localStorageMiddleware],
        preloadedState :initialState  
    });

}

