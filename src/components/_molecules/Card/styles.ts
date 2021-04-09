import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  background-color: var(--white);
  ul {
    padding: 10px;
    li {
      color: var(--white);
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
  padding-bottom: 10px;
`;

export const StyledCardLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const StyledLink = styled.a`
  background-color: var(--darkPink);
  width: 100%;
  max-width: 200px;
  height: 50px;
  border: none;
  transition: all 500ms ease;
  font-size: 2rem;
  text-decoration: none;
  text-align: center;
  color: var(--materialBlack);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--darkPurps);
    color: var(--darkPink);
  }
`;
