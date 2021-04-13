import styled from "styled-components";
import { StyledHeroWrapper } from "_organisms/Hero/styles";

export const StyledCharacterTemplateWrapper = styled.div`
  height: 100%;
  ${StyledHeroWrapper} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
