import { css } from '@emotion/react';
import Manrope from '../assets/fonts/Manrope-Regular.ttf';

const GlobalStyles = css`
  @font-face {
    font-family: 'Manrope';
    src: url(${Manrope}) format('truetype');
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: 'Manrope', sans-serif;
    color: #121417;

  }

  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  fieldset {
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

`;

export default GlobalStyles;
