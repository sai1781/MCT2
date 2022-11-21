import {createSlice} from '@reduxjs/toolkit'


const change = createSlice({
    name:"change",
    initialState:{
        input1:"Allow Edit",
        input2:"black",
        input3: 16,
        input4:""
    },
    reducers:{
        setValue1:(initialState,action) =>{
            initialState.input1 = action.payload
        },
        setValue2:(initialState,action) =>{
            initialState.input2 = action.payload
        },
        setValue3:(initialState,action) =>{
            initialState.input3 = action.payload
        },
        setValue4:(initialState,action) =>{
            initialState.input4 = action.payload
        }
    }
})

export const{setValue1} = change.actions
export const{setValue2} = change.actions
export const{setValue3} = change.actions
export const{setValue4} = change.actions
export default change.reducer;
