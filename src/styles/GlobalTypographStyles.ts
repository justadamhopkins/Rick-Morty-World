import { css } from "styled-components";

export const GlobalTypographyStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--font-primary);
    line-height: 1.25;
    color: var(--white);
  }
  h1 {
    font-size: var(--h1);
  }
  h2 {
    font-size: var(--h2);
  }
  p {
    margin-bottom: 1rem;
    font-family: var(--font-secondary);
    font-size: var(--p);
    color: var(--white);
  }
  ul {
    list-style-type: none;
  }
  a {
    color: var(--white);
    font-size: 1.8rem;
    text-decoration: none;
    padding: 10px 0;
    font-family: var(--font-secondary);
  }
`;
