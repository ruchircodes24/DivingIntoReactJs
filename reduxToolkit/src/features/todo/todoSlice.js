import {createSlice, nanoid} from '@reduxjs/toolkit'
//nanoid generate unique ids
const initialState = {
    todos: [{
        id:1, 
        text: 'Hello'
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {   //current state
            const todo = {
                id: nanoid(),
                text: action.payload    //action brings the data like ids/text/other properties of the object
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => { 
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer