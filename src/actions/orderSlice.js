import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     count: 0,
// }

export const orderSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
        // {
        //     title: 'McDonald',
        //     count: 0,
        // },
        // {
        //     title: 'Domino',
        //     count: 0,
        // },
        // {
        //     title: 'KFC',
        //     count: 0,
        // },
        // {
        //     title: 'Pizza',
        //     count: 0,
        // }
    },
    reducers: {
        increment: (state) => {
            console.log(state.count);
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
    }
});

export const { increment, decrement } = orderSlice.actions;

export default orderSlice.reducer