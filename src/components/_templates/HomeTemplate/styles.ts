import styled from "styled-components";
import { StyledHeroWrapper } from "_organisms/Hero/styles";

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

export const Wrapper = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
`;

export const IntroImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const IntroCopy = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: white;
`;
