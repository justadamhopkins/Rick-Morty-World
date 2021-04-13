import styled from "styled-components";
import { StyledHeroWrapper } from "_organisms/Hero/styles";

export const StyledCharacterTemplateWrapper = styled.div`
  ${StyledHeroWrapper} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
  }
`;
