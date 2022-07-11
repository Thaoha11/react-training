import CartItems from '../CartItems'
import CreateProducts from '../Common/CreateProducts'
import SearchProducts from '../Common/SearchProducts'
import SideBar from '../Common/Sidebar'

import {
    SectionBackGroundStyles,
    Wrapper,
    Title,
    Content,
    Row,
    ListItem,
    Line,
    TitleText,
} from './style'

function Home() {
    return (
        <SectionBackGroundStyles >
            <Wrapper>
                <Title>products</Title>
                <CreateProducts />
                <Content>
                    <SearchProducts />
                    <Row>
                        <SideBar />
                        <ListItem>
                            <Line>
                                <TitleText>List item</TitleText>
                            </Line>
                            <CartItems />
                        </ListItem>
                    </Row>

                </Content>
            </Wrapper>
        </SectionBackGroundStyles>

    )
}
export default Home
