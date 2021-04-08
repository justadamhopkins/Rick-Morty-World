import { FC } from "react";
import { StyledHeroWrapper } from "./styles";

export const Hero: FC = ({ children }) => {
  return <StyledHeroWrapper>{children}</StyledHeroWrapper>;
};
