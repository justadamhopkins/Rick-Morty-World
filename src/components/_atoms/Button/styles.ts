import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--darkPink);
  width: 100%;
  max-width: 200px;
  height: 50px;
  border: none;
  transition: all 500ms ease;
  p {
    margin-bottom: 0;
    font-size: 1.8rem;
  }
  &:hover {
    background-color: var(--darkPurps);
    color: var(--darkPink);
  }
`;
