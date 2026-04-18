import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    font-size: 1.05rem;
  }

  html, body {
    height: 100%;
  }

  #root {
    height: 100%; 
  }
`;

export default GlobalStyles;
