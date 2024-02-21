import { createSlice } from "@reduxjs/toolkit"

interface ICounterState {
    value: number
}

const initialState: ICounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        decrease(state) {
            state.value -= 1
        },
        reset(state) {
            state.value = 0
        },

        increase(state) {
            state.value += 1
        }
    }
})

export const counterActions = counterSlice.actions

export default counterSlice.reducer