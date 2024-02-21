import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { generateRandomInteger } from "common/utils"
import { dataLoremIpsum } from "data/data"

const filterItems = (items: string[], amount: number) => {
    if (amount < 2 || amount > 9) {
        return [items[generateRandomInteger(0, items.length - 1)]]
    } else {
        return items.slice(0, amount)
    }
}

interface ILoremIpsumState {
    items: string[],
    amount: number,
    filteredItems: string[]
}

const initialState: ILoremIpsumState = {
    items: dataLoremIpsum,
    amount: 0,
    filteredItems: filterItems(dataLoremIpsum, 0)
}

const loremIpsumSlice = createSlice({
    name: 'loremIpsum',
    initialState,
    reducers: {

        setAmount(state, action: PayloadAction<string>) {
            try {
                state.amount = Number.parseInt(action.payload)
            } catch (error) {
                state.amount = 0
            }
        },

        filterItems(state) {
            state.filteredItems = filterItems(state.items, state.amount)
        }
    }
})

export const loremIpsumActions = loremIpsumSlice.actions
export const loremIpsumReducer = loremIpsumSlice.reducer
