import styled from 'styled-components'

const Icon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const FontAwesomeIcon = styled.button`
    font-size :25px;
    border :none;
    background-color: #DAE5D0;
    margin-top: 10px;
    cursor: pointer;
    color:  ${props => props.edit ? "#A3A0C2" : "#C36C1C"};
`

export {
    Icon,
    FontAwesomeIcon
}
