import { createSlice } from '@reduxjs/toolkit'

const initialState = {detail: [] }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
   
  },
})


export const {setDetail} = counterSlice.actions
export default counterSlice.reducer