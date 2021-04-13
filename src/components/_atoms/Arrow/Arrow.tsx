import { FC } from "react";
import { StyledArrow } from "./styles";
interface Props {
  direction: "left" | "right";
}
export const Arrow: FC<Props> = ({ direction }) => {
  return <StyledArrow direction={direction}></StyledArrow>;
};

export default Arrow;
