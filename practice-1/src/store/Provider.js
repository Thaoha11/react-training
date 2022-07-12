import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from './reducer'


function Provider() {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <Context.Provider >

        </Context.Provider>
    )
}
export default Provider
