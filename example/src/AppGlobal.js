
import { useRef } from 'react'
import { useStore, actions } from './store'

function AppGlobal() {

    const [state, dispatch] = useStore()
    const { todos, todoInput } = state
    const inputRef = useRef()

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
        inputRef.current.focus()
    }
    return (
        <div style={{ padding: 20 }}>
            <input
                ref={inputRef}
                value={todoInput}
                placeholder='Enter todo...'
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}
export default AppGlobal
