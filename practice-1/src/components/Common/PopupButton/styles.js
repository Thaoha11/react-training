import styled from 'styled-components'

const ButtonFunc = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 33px;
`
const Button = styled.button`
    width: 100px;
    height: 30px;
    border:none;
    font-family: 'Inter';
    font-size: 16px;
    background-color :${props => props.save ? "rgba(2, 88, 255, 0.54)" : "#CCCCCC"};
`
export {
    ButtonFunc,
    Button
}
