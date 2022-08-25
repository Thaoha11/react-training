import { useState, memo } from "react";
import Popup from "../Popup";
import ConfirmPopup from "../ConfirmPopup";
import Button from "../Button";

import {
  Item,
  LeftSide,
  ImageItem,
  RightSide,
  NameItem,
  DescrItem,
  Icon,
  ItemLs,
} from "./styles";

const ItemInList = ({ onDelete, products, onUpdate }) => {
  const [selectedDeleteProductId, setSelectedDeleteProductId] = useState(null);
  const [selectedUpdateProductId, setSelectedUpdateProductId] = useState(null);

  // Show confirm DeletePopup
  const handleOpen = (id) => {
    setSelectedDeleteProductId(id);
  };
  // Close popup and confirm DeletePopup
  const handleClose = () => {
    setSelectedDeleteProductId(null);
    setSelectedUpdateProductId(null);
  };
  // Delete products
  const handleDelete = () => {
    onDelete(selectedDeleteProductId);
    setSelectedDeleteProductId(null);
  };
  // Update product
  const handleUpdate = (product) => {
    onUpdate(product);
  };

  return (
    <ItemLs>
      {products.map((product) => (
        <Item key={product.id}>
          <LeftSide>
            <ImageItem src={product.image} />
            <Icon>
              <Button
                className="edit"
                icon="fas fa-edit"
                onClicked={() => setSelectedUpdateProductId(product)}
              ></Button>
              <Button
                onClicked={() => handleOpen(product.id)}
                className="delete"
                icon="fas fa-trash-alt"
              ></Button>
            </Icon>
          </LeftSide>

          <RightSide>
            <NameItem> {product.name}</NameItem>
            <DescrItem>Price: {product.price} $ </DescrItem>
            <DescrItem>Brand: {product.brand}</DescrItem>
          </RightSide>
        </Item>
      ))}
      {/* show delete popup */}
      {!!selectedDeleteProductId && (
        <ConfirmPopup onSave={handleDelete} onClosePopup={handleClose} />
      )}
      {/* show update popup */}
      {!!selectedUpdateProductId && (
        <Popup
          text="Edit products"
          defaultValue={selectedUpdateProductId}
          onClosePopup={handleClose}
          onIsUpdate={handleUpdate}
        />
      )}
    </ItemLs>
  );
};
export default memo(ItemInList);
