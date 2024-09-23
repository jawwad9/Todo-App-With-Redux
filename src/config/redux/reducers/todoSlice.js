import { createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: "Todo",
    initialState: {
        todo: {
            title: "abc",
            id: 1
        }
    },
    reducers:{
        addTodo: (state, action) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })

        }
    }
})




export const { addTodo  } = todoSlice.actions
export default todoSlice.reducer