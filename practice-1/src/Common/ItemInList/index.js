import { useContext, useState } from "react";
import Popup from "../Popup";
import ConfirmDeletePopup from "../DeletePopup";
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
  const { products, deleteProduct } = useContext(StoreContext);

  const [selectedDeleteProductId, setSelectedDeleteProductId] = useState(null);
  const [selectedUpdateProductId, setSelectedUpdateProductId] = useState(null);

  console.log(products);
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
    deleteProduct(selectedDeleteProductId);
    setSelectedDeleteProductId(null);
  };

  return (
    <ItemLs>
      {/* render item */}
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
            <DescrItem>Price: {product.price}$ </DescrItem>
            <DescrItem>Brand : {product.brand}</DescrItem>
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
        />
      )}
    </ItemLs>
  );
}
export default ItemInList;
