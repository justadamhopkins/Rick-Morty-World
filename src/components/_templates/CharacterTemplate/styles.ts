import styled, { css } from "styled-components";
import { StyledHeroWrapper } from "_organisms/Hero/styles";

const CenterFlex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCharacterTemplateWrapper = styled.div`
  ${StyledHeroWrapper} {
    ${CenterFlex};
    justify-content: flex-start;
    padding-top: 20px;
  }
  h2 {
    padding-bottom: 10px;
    text-decoration: underline;
    text-align: center;
    align-self: center;
  }
  section {
    ${CenterFlex}
    padding-top: 20px;
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
