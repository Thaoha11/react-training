import { CommonButton } from "./styles";

function Button({ onClicked, text, className, icon, ref }) {
  return (
    <>
      <CommonButton ref={ref} onClick={onClicked} className={className}>
        {text} <i className={icon}></i>
      </CommonButton>
    </>
  );
}

export default Button;
