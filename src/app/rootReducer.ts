import { combineReducers } from "@reduxjs/toolkit"
import counterSlice from "./slices/counterSlice"
import { groceryBudReducer } from "./slices/groceryBudSlice"
import alertSlice from "./slices/alertSlice"
import { loremIpsumReducer } from "./slices/loremIpsumSlice"

const rootReducer = combineReducers({
    counter: counterSlice,
    groceryBud: groceryBudReducer,
    alert: alertSlice,
    loremIpsum: loremIpsumReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer