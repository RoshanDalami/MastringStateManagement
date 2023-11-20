import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface Item {
  id: string;
  text: string;
}

const todoSlice = createSlice({
  name: "todo",
  initialState: [] as Item[],
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Item>) => {
         state.push(action.payload);
      },
      prepare: (text: string) => {
        const id = nanoid();
        return { payload: { id, text } };
      },
    },
    removeTodo:{
      reducer:(state,action: PayloadAction <{id:string}> )=>{
        return state.filter((todo)=> todo.id !== action.payload.id) 
      },
      prepare:(id:string)=>{
        return {payload:{id}}
      }
      
    }
  },
});

export const {addTodo , removeTodo} = todoSlice.actions
export default todoSlice.reducer
