import { useState, memo, useContext } from "react";
import Popup from "../Popup";
import ConfirmPopup from "../ConfirmPopup";
import Button from "../Button";

import {
  Item,
  ImageItem,
  InformationItem,
  NameItem,
  DescriptionItem,
  IconButton,
  ContentItem,
  ProductItem,
} from "./styles";
import { StoreContext } from "../../../store";

const ItemInList = ({ products }) => {
  const { deleteProduct, updateProduct } = useContext(StoreContext);
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
    deleteProduct(selectedDeleteProductId);
    setSelectedDeleteProductId(null);
  };
  // Update product
  const handleUpdate = (product) => {
    updateProduct(product);
  };

  return (
    <ProductItem>
      {products.map((product) => (
        <Item key={product.id}>
          <ContentItem>
            <ImageItem src={product.image} />
            <InformationItem>
              <NameItem> {product.name}</NameItem>
              <DescriptionItem>Price: {product.price} $ </DescriptionItem>
              <DescriptionItem>Brand: {product.brand}</DescriptionItem>
            </InformationItem>
          </ContentItem>

          <IconButton>
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
          </IconButton>
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
    </ProductItem>
  );
};
export default memo(ItemInList);
