import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  :root {
    --primary-gradient:
  }
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 10%;
  }
  body {
    -webkit-tap-highlight-color: ${theme`colors.transparent`};
    ${tw`antialiased`}
  }

`;

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <CustomStyles />
    </>
);

export default GlobalStyles;
