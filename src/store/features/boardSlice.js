import {createSlice} from "@reduxjs/toolkit";

import api from "../../api";

export const boardSlice = createSlice({
    name: 'columns',
    initialState: {
        columns: [],
    },
    reducers: {
        loadColumns: (state) => {
            state.columns = api.loadColumns()
        },
        addTask: (_, {payload}) => {
            api.addTask(payload)
        },
        changeTaskPosition: (state, {payload}) => {
            state.columns = api.changeTaskPosition(payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const {loadColumns, addTask, changeTaskPosition} = boardSlice.actions

export default boardSlice.reducer