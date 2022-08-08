import { LeftSidebar, BrandTitle, BrandName, CheckBox, Label } from "./styles";

function SideBar() {
  return (
    <LeftSidebar>
      <BrandTitle>Brand</BrandTitle>
      <BrandName>
        <Label>
          <CheckBox name="isGoing" type="checkbox" />
          nike
        </Label>
        <Label>
          <CheckBox name="isGoing" type="checkbox" />
          adidas
        </Label>
        <Label>
          <CheckBox name="isGoing" type="checkbox" />
          mlb
        </Label>
        <Label>
          <CheckBox name="isGoing" type="checkbox" />
          pero
        </Label>
      </BrandName>
    </LeftSidebar>
  );
}
export default SideBar;
