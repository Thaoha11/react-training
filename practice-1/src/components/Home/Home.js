import CreateProducts from "../CreateProducts";
import SearchProducts from "../SearchProducts";
import SideBar from "../Sidebar";
import ItemInList from "../../Common/ItemInList";

import {
  SectionBackGroundStyles,
  Wrapper,
  Title,
  Content,
  Row,
  ListItem,
  Line,
  TitleText,
} from "./style";

function Home() {
  return (
    <SectionBackGroundStyles>
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
              <ItemInList />
            </ListItem>
          </Row>
        </Content>
      </Wrapper>
    </SectionBackGroundStyles>
  );
}
export default Home;
