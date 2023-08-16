import { configureStore, createSlice } from "@reduxjs/toolkit"

let basket = createSlice({
    name : 'basket',
    initialState : [
        
    ],
    reducers : {
        addProduct(state, action){
            
            const checkItem = state.findIndex((item) => item.no === action.payload.no);
            if(checkItem === -1) {
                state.push(action.payload);
            } else {
                state[checkItem].count++;
            }
        },
        plusProduct(state, action){
            const checkItem = state.findIndex((item) => item.no === action.payload);
            state[checkItem].count++;
        },
        minusProduct(state, action){
            const checkItem = state.findIndex((item) => item.no === action.payload);
            if(state[checkItem].count > 1) {
                state[checkItem].count--;
            }
        },
        deleteProduct(state, action){
            const checkItem = state.findIndex((item)=> item.no === action.payload);
            state.splice(checkItem, 1);
        }
    }
})

export let { addProduct, plusProduct, minusProduct, deleteProduct } = basket.actions

export default configureStore({
    reducer: {
        basket : basket.reducer
    }
})