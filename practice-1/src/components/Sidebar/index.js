import { useContext, useState } from "react";
import { StoreContext } from "../../store";
import { LeftSidebar, BrandTitle, BrandName, CheckBox, Label } from "./styles";

function SideBar() {
  const { products, filterProduct } = useContext(StoreContext);

  const checkList = ["nike", "adidas", "mlb", "pero"];
  const [checked, setChecked] = useState([]);
  const handleCheck = (e) => {
    // var updatedList = e.target.value;

    var updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
      console.log(updatedList);
    }
    filterProduct(updatedList);
  };

  return (
    <LeftSidebar>
      <BrandTitle>Brand</BrandTitle>
      <BrandName>
        {checkList.map((item, index) => (
          <Label key={index}>
            <CheckBox value={item} type="checkbox" onChange={handleCheck} />

            {item}
          </Label>
        ))}
      </BrandName>
    </LeftSidebar>
  );
}
export default SideBar;
