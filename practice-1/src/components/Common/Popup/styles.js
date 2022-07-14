import styled from 'styled-components'

const Modal = styled.div`
    position: absolute;
    width: 600px;
    height: 530px;
    left: 520px;
    top: 122px;
    background: #83BDC9;
    font-family: 'Inter';
    z-index: 4;
`
const Title = styled.p`
    text-align : center;
    font-weight: 400;
    font-size: 36px;
`
const FormSubmit = styled.form`
    margin-left: 35px;

`
const Label = styled.p`

    font-size: 16px;
`
const InputProduct = styled.input`
    width: 427px;
    height: 30px;
    border-radius: 5px;
`

const SelectBrand = styled.select`
    width: 90px;
    height: 30px;
    border-radius: 5px;
`

const ValueOption = styled.option`

`
export {
    Modal,
    Title,
    FormSubmit,
    Label,
    InputProduct,
    SelectBrand,
    ValueOption,

}
