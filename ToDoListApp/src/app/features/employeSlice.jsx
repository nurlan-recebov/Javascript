import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getEmployes = createAsyncThunk("getEmployes", async () => {
  const { data } = await axios.get("http://localhost:3000/todos");
  return data;
});
const initialState = {
  employes: [],
  detail: {},
};

export const employesSlice = createSlice({
  name: "employes",
  name: "detail",
  initialState,
  reducers: {
    AddEmploye: (state, action) => {
      state.employes.push(action.payload);
    },

    setDetail: (state, action) => {
      console.log(action.payload);
      state.detail = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getEmployes.fulfilled, (state, action) => {
      if (state.employes.length === 0) {
        state.employes = action.payload;
      }
    });
  },
});

export const { AddEmploye, setDetail } = employesSlice.actions;
export default employesSlice.reducer;
