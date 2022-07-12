import {
    Icon,
    FontAwesomeIcon,
} from './styles'

function Button() {

    return (
        <Icon>
            <FontAwesomeIcon edit ><i className="fas fa-edit"></i></FontAwesomeIcon>
            <FontAwesomeIcon ><i className="fas fa-trash-alt"></i></FontAwesomeIcon>
        </Icon>
    )
}
export default Button
