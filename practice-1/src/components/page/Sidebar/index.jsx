import { useContext, useState } from "react";
import { StoreContext } from "../../../store";
import {
  Wrapper,
  BrandTitle,
  BrandName,
  CheckBox,
  BrandNameItem,
} from "./styles";

const SideBar = () => {
  const { filterProduct, products } = useContext(StoreContext);
  const checkList = ["nike", "adidas", "mlb", "pero"];
  const [checked, setChecked] = useState([]);

  const handleCheck = (e) => {
    let listChecked = [...checked];
    if (e.target.checked) {
      // add value to array when checked
      listChecked = [...checked, e.target.value];
    } else {
      // remove value when unchecked
      listChecked.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(listChecked);
    filterProduct(listChecked);
  };

  return (
    <Wrapper>
      <BrandTitle>Brand</BrandTitle>
      <BrandName>
        {checkList.map((item, index) => (
          <BrandNameItem key={index}>
            <CheckBox
              value={item}
              type="checkbox"
              onClick={handleCheck}
              disabled={products.length === 0 ? true : false}
            />
            {item}
          </BrandNameItem>
        ))}
      </BrandName>
    </Wrapper>
  );
};

export default SideBar;
