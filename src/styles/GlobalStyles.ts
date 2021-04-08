import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  :root {
    --materialBlack: #282c35;
    --darkGrey: #464655;
    --darkPurps: #686276;
    --darkLilac: #907e96;
    --darkPink: #e8b9d2;
    --h1: 4.209rem;
    --h2: 3.157rem;
    --h3: 2.369rem;
    --h4: 1.777rem;
    --h5: 1.333rem;
    --p: 2rem;
    --small: 0.707rem;
  }
  ${reset}
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    color: '#1a202c';
    font-size: 62.5%;
    font-family: 'firaCode', Tahoma, Geneva, Verdana, sans-serif;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  body {
    font-weight: 400;
    line-height: 1.75;
    color: #000000;
    background-color: var(--materialBlack)
  }
  p {
    margin-bottom: 1rem;
    font-family: 'firaCode', Tahoma, Geneva, Verdana, sans-serif;
    font-size: var(--p);
  }
  h1,h2,h3,h4,h5 {
    font-family: 'merriweather-bold', Tahoma, Geneva, Verdana, sans-serif;
  }
  h1 {
    font-size: var(--h1)
  }
  h2 {
    font-size: var(--h2)
  }
  h3 {
    font-size: var(--h3)
  }
  h4 {
    font-size: var(--h4)
  }
  h5 {
    font-size: var(--h5)
  }
`;
