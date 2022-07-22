import styled from 'styled-components'

const ModalWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    height: 930px;
    width: 100%;
    z-index: 10;
    right: 1px;
    top: 2px;
`
const Modal = styled.div`
    position: absolute;
    width: 600px;
    height: 530px;
    left: 452px;
    top: 154px;
    background: #83BDC9;
    font-family: 'Inter';
    z-index: 39;

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
    ModalWrapper,
    Modal,
    Title,
    FormSubmit,
    Label,
    InputProduct,
    SelectBrand,
    ValueOption,

}
