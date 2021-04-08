import { createGlobalStyle } from "styled-components";

import firaCodeRegTTF from "../../public/fonts/FiraCode.ttf";
import firaCodeRegWOFF from "../../public/fonts/FiraCode.woff";
import firaCodeRegWOFF2 from "../../public/fonts/FiraCode.woff2";
import merriweatherBoldTTF from "../../public/fonts/merriweather-bold.ttf";
import merriweatherBoldWOFF from "../../public/fonts/merriweather-bold.woff";
import merriweatherBoldWOFF2 from "../../public/fonts/merriweather-bold.woff2";

export const GlobalFontStyles = createGlobalStyle`
    @font-face {
        font-family: 'firaCode-regular';
        src: local('firaCode-regular'), local('firaCode-regular'),
        url(${firaCodeRegWOFF2}) format('woff2'),
        url(${firaCodeRegWOFF}) format('woff'),
        url(${firaCodeRegTTF}) format('ttf');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'merriweather-bold';
        src: local('merriweather-bold'), local('merriweather-bold'),
        url(${merriweatherBoldWOFF2}) format('woff2'),
        url(${merriweatherBoldWOFF}) format('woff'),
        url(${merriweatherBoldTTF}) format('ttf');
        font-weight: normal;
        font-style: normal;
    }
`;
