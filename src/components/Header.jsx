import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'react-scroll';

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
`;

const MenuItemLink = styled(Link)`
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

const Header = () => {
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

  return (
    <Wrapper>
      <Content>
        <Img fixed={data.logo.childImageSharp.fixed} />
        <HeaderTitle>
          <Name>Brais Cao</Name>
          <Title>Web developer</Title>
        </HeaderTitle>
        <Menu>
          <MenuItem>
            <MenuItemLink activeClass="active" to="home" spy smooth duration={500}>
              Home
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink activeClass="active" to="portfolio" spy smooth duration={500}>
              Portfolio
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink activeClass="active" to="about" spy smooth duration={500} offset={-100}>
              About
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink activeClass="active" to="contact" spy smooth duration={500}>
              Contact
            </MenuItemLink>
          </MenuItem>
        </Menu>
      </Content>
    </Wrapper>
  );
};

export default Header;
