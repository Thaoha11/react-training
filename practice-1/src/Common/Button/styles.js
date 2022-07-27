import styled from 'styled-components'


const CommonButton = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    background: bottom;
    border:none;
    cursor: pointer;
    font-size :22px;

    &.edit {
    margin-top: 10px;
    background: #DAE5D0;
    color:#A3A0C2;
    }

    &.delete {
    margin-top: 10px;
    color:#C36C1C;
    }
`
export {
    CommonButton,
}
