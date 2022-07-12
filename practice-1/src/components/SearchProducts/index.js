import {
    InputWrapper,
    SearchInput,
    SearchButton
} from './styles'

function SearchProducts() {

    return (
        <InputWrapper>
            <SearchInput type='text' placeholder='Search' />
            <SearchButton> <i className="fas fa-search"></i> </SearchButton>
        </InputWrapper>
    )
}
export default SearchProducts
