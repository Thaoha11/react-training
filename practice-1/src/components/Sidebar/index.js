import { useState } from "react";
import { LeftSidebar, BrandTitle, BrandName, CheckBox, Label } from "./styles";

function SideBar({ onFilter }) {
  const checkList = ["nike", "adidas", "mlb", "pero"];
  const [checked, setChecked] = useState([]);

  const handleCheck = (e) => {
    let listChecked = [...checked];
    if (e.target.checked) {
      listChecked = [...checked, e.target.value];
    } else {
      listChecked.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(listChecked);

    onFilter(listChecked);
  };

  return (
    <LeftSidebar>
      <BrandTitle>Brand</BrandTitle>
      <BrandName>
        {checkList.map((item, index) => (
          <Label key={index}>
            <CheckBox value={item} type="checkbox" onClick={handleCheck} />
            {item}
          </Label>
        ))}
      </BrandName>
    </LeftSidebar>
  );
}
export default SideBar;
