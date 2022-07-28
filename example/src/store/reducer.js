import { SET_TODO_IPNUT, ADD_TODO } from './constants'

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_IPNUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                 todos: [...state.todos, action.payload],
                todoInput: ''
            }
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer
