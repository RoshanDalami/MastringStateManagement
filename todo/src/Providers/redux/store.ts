import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '@/Features/Counter/counterSlice'
import todoReducer from '@/Features/Todo/todoSlice';


export const store = configureStore({
    reducer:{
        counter: counterReducer,
        todos: todoReducer
    },
})


export  type RootState = ReturnType<typeof store.getState >

export type AppDispatch = typeof store.dispatch