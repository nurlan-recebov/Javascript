import { configureStore } from '@reduxjs/toolkit'
import { employesSlice } from './features/employeSlice'
export default configureStore({
    reducer: {},
    employes: employesSlice
})