import { useContext } from "react"
import Content from "./Content_useContext"
import { ThemeContext } from './ThemeContext'
import './App.css'

function AppUseContext() {

    const context = useContext(ThemeContext)

    return (
        <div style={{ padding: 20 }}>
            <button onClick={context.toggleTheme}>Toggle Theme</button>
            <Content />
        </div>

    )
}
export default AppUseContext
