import { useContext, useState } from "react";

import DeletePopup from "../DeletePopup";
import Button from "../Button";

import {
  ItemLs,
  Item,
  LeftSide,
  ImageItem,
  RightSide,
  NameItem,
  DescrItem,
  Icon,
} from "./styles";
import { StoreContext } from "../../store";

function ItemInList() {
  const { products } = useContext(StoreContext);
  const [show, setShow] = useState(false);
  console.log(products);
  // Show DeletePopup
  const handleOpen = () => {
    setShow(!show);
  };
  // Close DeletePopup
  const handleClose = () => {
    setShow(false);
  };

  return (
    <ItemLs>
      {products.map((product, index) => (
        <Item key={index}>
          <LeftSide>
            <ImageItem src={product.image} />
            <Icon>
              <Button className="edit" icon="fas fa-edit"></Button>
              <Button
                onClicked={handleOpen}
                className="delete"
                icon="fas fa-trash-alt"
              ></Button>
              {show && <DeletePopup onClosePopup={handleClose} />}
            </Icon>
          </LeftSide>
          <RightSide>
            <NameItem> {product.name}</NameItem>
            <DescrItem>Price: {product.price}$ </DescrItem>
            <DescrItem>Brand : {product.brand}</DescrItem>
          </RightSide>
        </Item>
      ))}
    </ItemLs>
  );
}
export default ItemInList;
