import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '../../agent'

const initialState = {
  value : 0,
  status: '',
  data : {},
  error : {}
}

// const pokemonData =  createAsyncThunk('counter/asyncPokemonData',()=>{
//     Pokemon.
// })

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers :{
        increment : (state) =>{
            state.value +=1 
        },
        decrement: (state) =>{
            state.value -= 1
        },
        incrementByAmount: (state,action) =>{
            state.value += action.payload
        } 
    },
    // extraReducers:{
    //     [pokemonData.fulfilled]: ()=>{},
    //     [pokemonData.rejected]: ()=>{},
    //     [pokemonData.pending]: ()=>{}, 
    // }
})

export const {increment,decrement,incrementByAmount}  = counterSlice.actions
export default counterSlice.reducer