import { SET_INPUT, ADD_PRODUCT } from "./constants";

export const setTodoInput = payload => ({
    type: SET_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_PRODUCT,
    payload
})
