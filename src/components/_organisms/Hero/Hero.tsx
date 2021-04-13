import { FC } from "react";
import { StyledHeroWrapper } from "./styles";
interface Props {
  fluidHeroHeight: boolean;
}
export const Hero: FC<Props> = ({ children, fluidHeroHeight = false }) => {
  return (
    <StyledHeroWrapper fluidHeroHeight={fluidHeroHeight}>
      {children}
    </StyledHeroWrapper>
  );
};
