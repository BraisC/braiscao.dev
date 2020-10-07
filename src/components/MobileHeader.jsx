import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import SideBar from './SideBar';

const Wrapper = styled.header`
  padding: 1rem 2rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10rem;
  z-index: 4;
  background-color: var(--color-black);
`;
const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--color-primary);
`;

const Hamburger = styled(motion.div)`
  width: 10rem;
  height: 66%;
  padding: 0.6rem 3rem;
  color: var(--color-white);
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: auto;
`;

const HamburgerLine = styled(motion.span)`
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--color-white);
`;

const firstLine = {
  closed: {
    rotate: 0,
    marginTop: 0,
    backgroundColor: 'var(--color-white)',
  },
  open: { rotate: 45, marginTop: '1px', backgroundColor: 'var(--color-red)' },
};
const secondLine = {
  closed: { opacity: 1 },
  open: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
const thirdLine = {
  closed: { rotate: 0, backgroundColor: 'var(--color-white)' },
  open: { rotate: -45, backgroundColor: 'var(--color-red)' },
};

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((v) => !v);
    // I suppose this is fine as it is not React-created DOM
    document.querySelector('body').classList.toggle('noscroll');
  };
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 70, quality: 100, traceSVG: { threshold: 254 }) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <>
      <Wrapper>
        <Img fixed={data.logo.childImageSharp.fixed} />
        <HeaderTitle>
          <Name>Brais Cao</Name>
          <Title>Web developer</Title>
        </HeaderTitle>

        <Hamburger initial={false} animate={isMenuOpen ? 'open' : 'closed'} onClick={handleClick}>
          <HamburgerLine style={{ originX: '0.15rem' }} variants={firstLine} />
          <HamburgerLine variants={secondLine} />
          <HamburgerLine style={{ originX: '0.15rem' }} variants={thirdLine} />
        </Hamburger>
      </Wrapper>
      <AnimatePresence>
        {isMenuOpen && <SideBar key="sidebar" closeMenu={handleClick} />}{' '}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
