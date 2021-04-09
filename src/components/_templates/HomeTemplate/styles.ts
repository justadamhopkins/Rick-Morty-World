import styled from "styled-components";
import { StyledHeroWrapper } from "src/components/_organisms/Hero/styles";

export const StyledHomePageWrapper = styled.div`
  position: relative;
  height: 100%;

  ${StyledHeroWrapper} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledSection = styled.section`
  margin-top: -100px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;
