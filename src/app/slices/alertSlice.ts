import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export enum AlertType {
    blank = '',
    danger = 'alert-danger',
    success = 'alert-success'
}

interface IAlert {
    text: string,
    className: AlertType
}

const alertBlank: IAlert = { text: '', className: AlertType.blank }

const initialState = alertBlank

const alertSlice = createSlice({
    name: 'alert',

    initialState,
    
    reducers: {

        show(state, action: PayloadAction<IAlert>) {
            return action.payload
        },

        hide(state) {
            return alertBlank
        }

    }
})

export const alertActions = alertSlice.actions

export default alertSlice.reducer