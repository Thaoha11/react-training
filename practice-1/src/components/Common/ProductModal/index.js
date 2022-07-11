import {
    FormSubmit,
    Label,
    InputProduct,
    SelectBrand,
    ValueOption
} from './styles'

function ProductModal() {
    <FormSubmit>
        <Label>Name</Label>
        <InputProduct type='text' />
        <Label>Name</Label>
        <InputProduct type='text' />
        <Label>Name</Label>
        <SelectBrand>
            <ValueOption value="0">Nike</ValueOption>
            <ValueOption value="1">Adidas</ValueOption>
            <ValueOption value="2">MLB</ValueOption>
        </SelectBrand>
    </FormSubmit>
}
export default ProductModal
