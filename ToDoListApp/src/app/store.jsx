import { configureStore } from '@reduxjs/toolkit'
import employesSlice from './features/employeSlice'
export const store = configureStore({
    reducer: {
        employes: employesSlice
        
    }

})