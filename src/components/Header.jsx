import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'react-scroll';
import { AnimateSharedLayout, motion } from 'framer-motion';

const Wrapper = styled.header`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  width: 100%;
  height: 10rem;
  z-index: 3;
  background-color: var(--color-black);
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-left: auto;
  font-weight: 500;
`;

const MenuItem = styled.li`
  margin: 0.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMenuItemLink = styled(Link)`
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-primary);
  }
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

const Underline = styled(motion.div)`
  width: 90%;
  height: 3px;
  background: var(--color-primary);
  position: absolute;
  bottom: 0;
`;

const MenuItemLink = (props) => (
  <>
    <StyledMenuItemLink
      to={props.value}
      spy
      smooth
      duration={500}
      offset={-100}
      onSetActive={() => props.setActive(props.value)}
    >
      {props.value}
    </StyledMenuItemLink>
    {props.active === props.value && <Underline layoutId="underline" />}
  </>
);

const Header = () => {
  const [active, setActive] = useState('');
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 70, quality: 100, traceSVG: { threshold: 254 }) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const handleScroll = () => {
    const totalPageHeight = document.body.scrollHeight;
    const scrollPoint = window.scrollY + window.innerHeight;

    if (scrollPoint >= totalPageHeight - 10) {
      setActive('contact');
    } else if (active === 'contact') {
      setActive('about');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Wrapper>
      <Content>
        <Img fixed={data.logo.childImageSharp.fixed} />
        <HeaderTitle>
          <Name>Brais Cao</Name>
          <Title>Web developer</Title>
        </HeaderTitle>
        <Menu>
          <AnimateSharedLayout>
            <MenuItem>
              <MenuItemLink value="home" setActive={setActive} active={active} />
            </MenuItem>
            <MenuItem>
              <MenuItemLink value="portfolio" setActive={setActive} active={active} />
            </MenuItem>
            <MenuItem>
              <MenuItemLink value="about" setActive={setActive} active={active} />
            </MenuItem>
            <MenuItem>
              <MenuItemLink value="contact" setActive={setActive} active={active} />
            </MenuItem>
          </AnimateSharedLayout>
        </Menu>
      </Content>
    </Wrapper>
  );
};

export default Header;
