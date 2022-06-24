import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {decrement, increment, incrementByAmount} from './CounterSlice' 

export function Counter(){
    const count = useSelector((state) => (state.value))
    console.log('count',count)
    const dispatch  = useDispatch();

    return(
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={()=>{dispatch(increment())}}
                >
                    Increment
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={()=>{dispatch(incrementByAmount(2))}}
                >
                    Decrement
                </button>
                {count}
            </div>
        </div>
    )

}