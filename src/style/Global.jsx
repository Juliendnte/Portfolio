import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    margin: 0;
    padding: 0;
    cursor: none;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6, button, li {
    font-family: ${props => props.theme.fonts.title};
    font-size: inherit;
    font-weight: inherit;

  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  ::selection {
    color: black !important;
    background: #e5e7eb none;
  }
`;

export default GlobalStyles;