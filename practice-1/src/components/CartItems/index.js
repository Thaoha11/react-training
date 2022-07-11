import {
    ItemLs,
    Item,
    LeftSide,
    ImageItem,
    Icon,
    FontAwesomeIcon,
    RightSide,
    NameItem,
    DescrItem
} from './styles'

function CartItems() {
    <ItemLs>
        <Item>
            <LeftSide>
                <ImageItem src='https://static2.yan.vn/YanNews/2167221/202010/irene-chanyeol-vua-nhan-danh-dai-su-prada-da-gap-phot-lon-8b89a4dc.jpg' />
                <Icon>
                    <FontAwesomeIcon edit ><i className="fas fa-edit"></i></FontAwesomeIcon>
                    <FontAwesomeIcon ><i className="fas fa-trash-alt"></i></FontAwesomeIcon>
                </Icon>
            </LeftSide>
            <RightSide>
                <NameItem>Product 1</NameItem>
                <DescrItem> Price :1000$ </DescrItem>
                <DescrItem> Brand : Nike</DescrItem>
            </RightSide>
        </Item>
    </ItemLs>
}
export default CartItems
