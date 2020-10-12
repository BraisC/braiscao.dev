import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import MobileHeader from './MobileHeader';

const GlobalStyle = createGlobalStyle`
  
  :root {
    --app-height: 100%;
  }

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
    --color-red: #ff5959;

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

  ::-moz-selection { background: var(--color-primary); }
  ::selection { background: var(--color-primary); }

  .noscroll{
    overflow: hidden;
  }
`;

const Content = styled(motion.main)`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 4rem;
`;

const HeaderWrapper = styled(motion.div)`
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 10rem;
  @media only screen and (max-width: 900px) {
    height: 8rem;
  }
`;

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 60em)');
    const changeMobile = () => {
      mediaQuery.matches ? setIsMobile(true) : setIsMobile(false);
    };
    //TODO change this deprecated way of listen
    changeMobile();
    mediaQuery.addListener(changeMobile);
    return () => mediaQuery.removeListener(changeMobile);
  }, []);

  //Fix for height in mobile https://stackoverflow.com/a/50683190
  const appHeight = () => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
  };

  useEffect(() => {
    appHeight();
  }, []);

  return (
    <>
      <GlobalStyle />
      <HeaderWrapper initial={{ y: '-100%' }} animate={{ y: '0', transition: { delay: '0.3' } }}>
        {isMobile ? <MobileHeader /> : <Header />}
      </HeaderWrapper>
      <Content
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        {children}
      </Content>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
