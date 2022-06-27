import { useContext } from "react";
import { ThemeContext } from './ThemeContext'

function Paragraph() {
    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            Try modifying your React component and see how it changes.
            If you ared using VS Code and Windows Subsystem for Linux (WSL), make sure you installed extension
        </p>
    )
}

export default Paragraph
