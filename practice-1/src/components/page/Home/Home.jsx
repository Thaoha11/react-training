import SearchProducts from "../SearchProducts";
import SideBar from "../Sidebar";
import ItemInList from "../../Common/ItemInList";
import Button from "../../Common/Button";
import Popup from "../../Common/Popup";

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
import { useContext, useState } from "react";
import { StoreContext } from "../../../store";

const Home = () => {
  const { products, filteredList } = useContext(StoreContext);

  const [show, setShow] = useState(false);

  // show popup
  const handleOpenPopup = () => {
    setShow(!show);
  };
  // close popup
  const handleClosePopup = () => {
    setShow(false);
  };

  return (
    <SectionBackGroundStyles>
      <Wrapper>
        <Title> products</Title>

        <Button onClicked={handleOpenPopup} icon="fas fa-plus-square" />

        {show && (
          <Popup text="Create product" onClosePopup={handleClosePopup} />
        )}
        <Content>
          <SearchProducts />
          <Row>
            <SideBar products={products} />
            <ListItem>
              <Line>
                <TitleText>List item</TitleText>
              </Line>
              <ItemInList
                // check filtered list if filtered list not contains any render all products
                // else render filtered products follow filtered checkbox
                products={filteredList.length === 0 ? products : filteredList}
              />
            </ListItem>
          </Row>
        </Content>
      </Wrapper>
    </SectionBackGroundStyles>
  );
};
export default Home;
