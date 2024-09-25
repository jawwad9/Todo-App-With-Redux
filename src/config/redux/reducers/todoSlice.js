import { createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: "Todo",
    initialState: {
        todo: []
    },
    reducers:{
        addTodo: (state, action) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })

        },
        removeTodo: (state, action) => {
            state.todo.splice(action.payload.index , 1)
        },
        editTodo: (state, action) => {
            const todoToEdit = state.todo[action.payload.index]
            if (todoToEdit) {
                todoToEdit.title = action.payload.title; // Update the title
            }
        }
    }
})




export const { addTodo, removeTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer