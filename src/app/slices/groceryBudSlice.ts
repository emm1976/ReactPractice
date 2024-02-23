import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"

const LS_ITEM_NAME = 'list'

export interface IGroceryItem {
    id: string,
    value: string | null | undefined
}

export interface IgroceryBud {
    lookupPending: boolean,
    groceryBudItems: IGroceryItem[],
    errorMessage?: string,
    editFlag: boolean,
    editId: string,
    inputValue: string
}

const data = localStorage.getItem(LS_ITEM_NAME)

const initialState: IgroceryBud = {
    lookupPending: false,
    groceryBudItems: data ? JSON.parse(data) : [],
    editFlag: false,
    editId: '',
    inputValue: ''
}

const fireBaseRootUrl = 'https://redux-http-d4bef/database/redux-http-d4bef-default-rtdb/data/'
const fireBaseUrl = fireBaseRootUrl + 'groceryBudItems.json'

export const fetchGroceryBudItems = createAsyncThunk(
    'groceryBud/fetchGroceryBudItems',

    async () => {
        try {
            const response = await axios.get<IGroceryItem[]>(fireBaseUrl)
            if (response.status !== 200) {
                throw new Error('Request failed: ' + response.status)
            }
            return response.data
        } catch (error) {
            throw new Error('Request failed: ' + (error as AxiosError).message)
        }
    }
)

export const sendGroceryBudItems = createAsyncThunk(
    'groceryBud/sendGroceryBudItems',

    async () => {
        try {
            const response = await axios.post<IGroceryItem[]>(fireBaseUrl, )
            if (response.status !== 200) {
                throw new Error('Request failed: ' + response.status)
            }
            return response.data
        } catch (error) {
            throw new Error('Request failed: ' + (error as AxiosError).message)
        }
    }
)

// export const sendData = (groceryBudItems: IGroceryItem[]) => {
//     return async (dispatch: Dispatch<UnknownAction>) => {
//         const sendRequest = async () => {
//             const result = await fetch(
//                 fireBaseUrl,
//                 {
//                     method: "PUT",
//                     body: JSON.stringify(groceryBudItems),
//                 }
//             )
//             const data = await result.json()
//         }
//         try {
//             await sendRequest()
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

const groceryBudSlice = createSlice({
    name: 'groceryBud',

    initialState,

    reducers: {

        replaceData(state, action) {
            state = action.payload.itemsList;
        },

        addItem(state, action: PayloadAction<string>) {
            const newItem: IGroceryItem = {
                id: Math.random().toString(36).substr(2, 9),
                value: action.payload
            }
            state.groceryBudItems.push(newItem)
            state.editFlag = false
            state.editId = ''
            state.inputValue = ''
        },

        startEditItem(state, action: PayloadAction<string>) {
            state.editFlag = true
            state.editId = action.payload
        },

        saveInputValue(state, action: PayloadAction<string>) {
            state.inputValue = action.payload
        },

        editItem(state) {
            state.groceryBudItems = state.groceryBudItems.map(item => {
                if (item.id === state.editId) {
                    return { ...item, value: state.inputValue }
                }
                return item
            })
            state.editFlag = false
            state.editId = ''
            state.inputValue = ''
        },


        stopEditItem(state) {
            state.editFlag = false
            state.editId = ''
            state.inputValue = ''
        },

        deleteItem(state, action: PayloadAction<string>) {
            state.groceryBudItems = state.groceryBudItems.filter((item) => item.id !== action.payload)
            state.editFlag = false
            state.editId = ''
            state.inputValue = ''
        },

        deleteAllItems(state) {
            state.groceryBudItems = []
            state.editFlag = false
            state.editId = ''
            state.inputValue = ''
        },

    },

    extraReducers: (builder) => {

        builder.addCase(fetchGroceryBudItems.pending, (state) => {
            state.lookupPending = true;
        });

        builder.addCase(fetchGroceryBudItems.fulfilled, (state, action) => {
            state.lookupPending = false;
            state.groceryBudItems = action.payload
        });

        builder.addCase(fetchGroceryBudItems.rejected, (state, action) => {
            state.lookupPending = false;
            state.errorMessage = action.error.message
        })
    }

})

export const groceryBudActions = groceryBudSlice.actions

export const groceryBudReducer = groceryBudSlice.reducer