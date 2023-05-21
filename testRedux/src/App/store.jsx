import { configureStore } from '@reduxjs/toolkit'
import { todoListsApi } from './reducers/createApi/employeapi'

import counterReducer from './reducers/todosSlice'
const store = configureStore({
  reducer:{
    counter: counterReducer,
    [todoListsApi.reducerPath]: todoListsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(todoListsApi.middleware),
})

export default store