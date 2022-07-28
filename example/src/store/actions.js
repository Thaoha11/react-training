import { SET_TODO_IPNUT, ADD_TODO } from "./constants";

export const setTodoInput = payload => ({
    type: SET_TODO_IPNUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
}) 
