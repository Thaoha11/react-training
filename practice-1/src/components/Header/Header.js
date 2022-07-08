
import {
    SectionBackGroundStyles,
    Wrapper,
    Title,
    AddNew,
    ButtonAdd,
    Content,
    InputWrapper,
    ButtonSearch,
    SearchInput,
    Row,
    LetSidebar,
    BrandTitle,
    BrandName,
    Brand,
    ListItem,
    Line,
    ItemLs,
    Item,
    TitleText,
    ImageItem,
    NameItem,
    PriceItem,
    DescrItem,
    ButtonItem,
    Button
} from './style'

function Header() {
    return (
        <SectionBackGroundStyles >
            <Wrapper>
                <Title>products</Title>
                <AddNew>Add new </AddNew>
                <ButtonAdd>
                    <i class="fas fa-plus-square"></i>
                </ButtonAdd>
                <Content>
                    <InputWrapper>
                        <SearchInput placeholder='Search' />
                        <ButtonSearch> <i class="fas fa-search"></i> </ButtonSearch>
                    </InputWrapper>

                    <Row>
                        {/* Catelory */}
                        <LetSidebar>
                            <BrandTitle>
                                Brand
                            </BrandTitle>
                            <BrandName>
                                <Brand>nike</Brand>
                                <Brand>adidas</Brand>
                                <Brand>mlb</Brand>
                                <Brand>pero</Brand>
                            </BrandName>

                        </LetSidebar>


                        <ListItem>
                            <Line>
                                <TitleText>List item</TitleText>
                            </Line>
                            <ItemLs>
                                <Item>
                                    <ImageItem src='https://saigonbag.vn/uploads/noidung/thumb/tui-xach-dior-lady-d-lite-hong-0-970.jpg' />
                                </Item>
                            </ItemLs>

                        </ListItem>
                    </Row>

                </Content>
            </Wrapper>
        </SectionBackGroundStyles>

    )
}
export default Header
