import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const getEmployes = createAsyncThunk('getEmployes', async() => {
    const { data } = await axios.get('http://localhost:3000/todos')
    return data
})
const initialState = {
    employes: []
}
export const employesSlice = createSlice({
    name: 'employes',
    initialState,
    reducers: {
AddEmploye: (state,action) => {
state.employes.push(action.payload)
}

    },
    extraReducers: (builder) => {
        builder.addCase(getEmployes.fulfilled, (state, action) => {
            state.employes = action.payload
        })
    }
})



export const {AddEmploye} = employesSlice.actions
export default employesSlice.reducer