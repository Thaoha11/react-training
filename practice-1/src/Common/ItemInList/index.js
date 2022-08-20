import { useState, memo } from "react";
import Popup from "../Popup";
import ConfirmDeletePopup from "../DeletePopup";
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

function ItemInList({ onDelete, products, onUpdate }) {
  const [selectedDeleteProductId, setSelectedDeleteProductId] = useState(null);
  const [selectedUpdateProductId, setSelectedUpdateProductId] = useState(null);

  // Show DeletePopup
  const handleOpen = (id) => {
    setSelectedDeleteProductId(id);
  };
  // Close popup
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
        <ConfirmDeletePopup onOK={handleDelete} onClosePopup={handleClose} />
      )}
      {/* show update popup */}
      {!!selectedUpdateProductId && (
        <Popup
          text="Edit products"
          defaultValue={selectedUpdateProductId}
          onClosePopup={handleClose}
          OnIsUpdate={handleUpdate}
        />
      )}
    </ItemLs>
  );
}
export default memo(ItemInList);
