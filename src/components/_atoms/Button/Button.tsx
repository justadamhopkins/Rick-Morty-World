import { FC } from "react";
import { StyledButton } from "./styles";

interface Props {
  copy?: string;
}

export const Button: FC<Props> = ({ copy = "View Profile" }) => {
  return (
    <StyledButton>
      <p>{copy}</p>
    </StyledButton>
  );
};
