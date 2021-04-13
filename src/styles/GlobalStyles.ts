import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { GlobalFontStyles } from "./GlobalFontStyles";
import { GlobalTypographyStyles } from "./GlobalTypographStyles";

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
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
    --background: var(--materialBlack);
    --secondaryBackground: var(--darkPink);
    --font-primary: 'merriweather-bold', Tahoma, Geneva, Verdana;
    --font-secondary: 'firaCode-regular', Tahoma, Geneva, Verdana;
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
    font-family: var(--font-secondary)
  }
  body {
    font-weight: 400;
    line-height: 1.75;
    color: #000000;
    background-color: var(--background);
  }
  html,
  body {
    margin: 0;
    padding: 0;
       height: 100vh;
  }
  #__next {
    height: 100%;
  }
  ${GlobalFontStyles}
  ${GlobalTypographyStyles}
`;
