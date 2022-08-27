import { useState } from "react";
import { Wrapper, BrandTitle, BrandName, CheckBox, Label } from "./styles";

const SideBar = ({ onFilter, products }) => {
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
    onFilter(listChecked);
  };

  return (
    <Wrapper>
      <BrandTitle>Brand</BrandTitle>
      <BrandName>
        {checkList.map((item, index) => (
          <Label key={index}>
            <CheckBox
              value={item}
              type="checkbox"
              onClick={handleCheck}
              disabled={products.length === 0 ? true : false}
            />
            {item}
          </Label>
        ))}
      </BrandName>
    </Wrapper>
  );
};

export default SideBar;
