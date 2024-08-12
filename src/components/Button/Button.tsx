import { IButton } from "./types";
import { ButtonStyled } from "./styles";

export default function Button(props: IButton) {
  return (
    <ButtonStyled onClick={props.onClick}>
      {props.children ? props.children : <span className="label">{props.label}</span>}
    </ButtonStyled>
  );
};