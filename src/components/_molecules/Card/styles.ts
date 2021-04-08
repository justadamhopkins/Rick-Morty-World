import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  background-color: #eddea4;
  ul {
    li {
      color: #fff;
      font-size: 1.6rem;
      padding-left: 5px;
      :nth-child(1) {
        background-color: var(--darkPurps);
      }
      :nth-child(2) {
        background-color: var(--darkLilac);
      }
      :nth-child(3) {
        background-color: var(--darkGrey);
      }
    }
  }
`;

export const StyledCardImageWrapper = styled.div`
  max-height: 250px;
  width: 100%;
  overflow: hidden;
`;

export const StyledCardButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
