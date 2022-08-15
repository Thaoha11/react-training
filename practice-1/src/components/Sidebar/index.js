import { useContext, useState } from "react";
import { StoreContext } from "../../store";
import { LeftSidebar, BrandTitle, BrandName, CheckBox, Label } from "./styles";

function SideBar() {
  const { products, filterProduct } = useContext(StoreContext);

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

    filterProduct(listChecked);
    // const b = products.filter((item) => listChecked.includes(item.brand));
    // console.log(b);
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
