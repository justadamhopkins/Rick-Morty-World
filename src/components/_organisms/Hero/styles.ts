import styled, { css } from "styled-components";

export const StyledHeroWrapper = styled.div<{ fluidHeroHeight: boolean }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../hero.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin: -2rem -2rem 0;
  ${({ fluidHeroHeight }) =>
    !fluidHeroHeight &&
    css`
      height: 50%;
    `};
`;
