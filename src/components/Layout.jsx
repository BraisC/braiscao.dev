import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent; /* Avoid blue square on tapping */
  }

   html {
    font-size: 62.5%; 
    box-sizing: border-box;
    --color-white: #f4f4f4;
    --color-black: #0A2027;
    --color-primary: #71E2A6;
    --color-translucid: #0a2027d8;

    @media only screen and (max-width: 75em){
        font-size: 56.25%;
    }
    @media only screen and (max-width: 56.25em) {
        font-size: 50%;
    }
   }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 1.2;
    word-wrap: break-word;
    font-kerning: normal;
    background-color: var(--color-black);
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }

  [data-emoji] {
    font-style: normal;
    font-weight: normal;
  }
  [data-emoji]:before {
    content: attr(data-emoji);
    margin-right: .250em;
  }

  ::-moz-selection { background: var(--color-primary); }
  ::selection { background: var(--color-primary); }

  .noscroll{
    overflow: hidden;
  }
`;

const Content = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 4rem;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
