import { useContext, useState } from "react";
import Popup from "../Popup";
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
  const [isShow, setIsShow] = useState(false);
  console.log(products);
  // Show DeletePopup
  const handleOpen = () => {
    setShow(!show);
  };
  // Close DeletePopup
  const handleClose = () => {
    setShow(false);
  };

  const handleOpenPopup = () => {
    setIsShow(!isShow);
  };
  const handleClosePopup = () => {
    setIsShow(false);
  };
  return (
    <ItemLs>
      {/* render item */}
      {products.map((product, index) => (
        <Item key={index}>
          <LeftSide>
            <ImageItem src={product.image} />
            <Icon>
              <Button
                className="edit"
                icon="fas fa-edit"
                onClicked={handleOpenPopup}
              ></Button>

              <Button
                onClicked={handleOpen}
                className="delete"
                icon="fas fa-trash-alt"
              ></Button>
            </Icon>
          </LeftSide>
          <RightSide>
            <NameItem> {product.name}</NameItem>
            <DescrItem>Price: {product.price}$ </DescrItem>
            <DescrItem>Brand : {product.brand}</DescrItem>
          </RightSide>
        </Item>
      ))}
      {/* show delete popup */}
      {show && <DeletePopup onClosePopup={handleClose} />}
      {/* show update popup */}
      {isShow && <Popup text="Edit products" onClosePopup={handleClosePopup} />}
    </ItemLs>
  );
}
export default ItemInList;
