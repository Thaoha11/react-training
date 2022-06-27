import { useReducer, useRef } from "react"

// Init state
// const initState = 0

// // Action
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'

// // Reducer
// const reducer = (state, action) => {
//     switch (action) {
//         case UP_ACTION:
//             return state + 1
//         case DOWN_ACTION:
//             return state - 1
//         default:
//             throw new Error('Invalid action')
//     }
// }

// function UseReducer() {
//     const [count, dispatch] = useReducer(reducer, initState)
//     return (
//         <div style={{ padding: 20 }}>
//             <h1>{count}</h1>
//             <button onClick={() => dispatch(UP_ACTION)}>UP</button>
//             <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
//         </div>
//     )
// }

//  ===============Todo App===============
//  1.Init State
const initState = {
    job: '',
    jobs: []
}

//  2.Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}
// 3.Reducer
const reducer = (state, action) => {

    console.log('Action :', action)
    let newState
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)

            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default:
            throw new Error('Invalid action')
    }
    console.log('new state:', newState)

    return newState
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initState)

    const { job, jobs } = state

    const inputRef = useRef()
    const handelSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>TODO</h1>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handelSubmit}>ADD</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UseReducer;
