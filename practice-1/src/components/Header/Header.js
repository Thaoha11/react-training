import {
    SectionBackGroundStyles,
    Wrapper,
    Title,
    ButtonAdd,
    Content,
    SearchInput,
    SortByBrand,
    ListItem,
    Item,
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
                <Title>LIST OF PRODUCTS</Title>
                <ButtonAdd> &#43; Add new</ButtonAdd>
                <Content>
                    <SearchInput placeholder='Search' />
                    <SortByBrand> Sort by: Brand</SortByBrand>
                    <ListItem>
                        <Item>
                            <ImageItem src='https://tuixachhanghieu.com/wp-content/uploads/2021/12/2929604tui-xach-nu-lady-dior-jpeg.jpg' />
                            <DescrItem>
                                <NameItem>Lady Dior</NameItem>
                                <PriceItem>Price: </PriceItem>
                                <PriceItem>Brand: </PriceItem>
                            </DescrItem>
                            <ButtonItem>
                                <Button edit>Edit</Button>
                                <Button>Delete</Button>
                            </ButtonItem>
                        </Item>
                        <Item>
                            <ImageItem src='https://sneakerdaily.vn/wp-content/uploads/2021/07/giay-nu-wmns-air-jordan-1-low-white-wolf-grey-dc0774-105.png.webp' />
                        </Item>
                    </ListItem>
                </Content>
            </Wrapper>
        </SectionBackGroundStyles>

    )
}
export default Header
