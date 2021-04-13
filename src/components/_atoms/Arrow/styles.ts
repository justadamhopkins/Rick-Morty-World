import styled, { css } from "styled-components";

const left = `
 transform: rotate(135deg);
`;

const right = `
  transform: rotate(-45deg);
`;

const directions = {
  left,
};

export const StyledArrow = styled.i<{ direction: "left" | "right" }>`
  border: solid var(--white);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 0 5px 2px 0px;
  ${({ direction }) =>
    directions[direction] &&
    css`
      ${directions[direction]}
    `};
`;
