import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const getEmployes = createAsyncThunk('getEmployes', async() => {
    const { data } = await axios.get('http://localhost:3000/todos')
    return data
})
export const employesSlice = createSlice({
    name: 'employes',
    initialState: {
        employes: []
    },
    reducers: {


    },
    extraReducers: (builder) => {
        builder.addCase(getEmployes.fulfilled, (state, action) => {
            state.employes = action.payload
        })
    }
})




export default employesSlice.reducer