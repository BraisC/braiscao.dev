import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const sidebarVariants = {
  close: {
    //transition activated will make the children hide before the sidebar
    x: '100%',
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
  open: {
    x: '0',
    transition: {
      //when: 'beforeChildren', //this will make the children animate after the sidebar ends animation
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  },
};
// These variants execute when the father (sidebar) changes its animation state
const itemVariants = {
  close: { y: '600px', transition: { duration: 0.1 } },
  open: { y: '0', transition: { duration: 0.1 } },
};

const Wrapper = styled(motion.div)`
  display: flex;
  padding: 10rem 8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-secondary);
  transition: background-color 0.2s ease, color 0.2s ease;
  position: fixed;
  width: 100%;
  height: calc(var(--app-height));
  z-index: 5;
  background-color: var(--color-translucid);
`;

const Nav = styled.nav`
  padding: 1rem;
  text-transform: uppercase;
  font-size: 3.5rem;
  font-weight: 700;
  transform: translateY(-5rem);
`;

const Menu = styled.ul`
  text-align: center;

  & li {
    list-style: none;
    margin: 1rem 0;
  }
`;

const MenuLink = styled(Link)`
  padding: 1.5rem;
`;

const MenuItem = ({ value, route, closeMenu, ...rest }) => (
  <motion.li key={value} variants={itemVariants}>
    <MenuLink onClick={closeMenu} to={route} {...rest}>
      {value}
    </MenuLink>
  </motion.li>
);

const SideBar = ({ closeMenu }) => (
  <Wrapper initial="close" animate="open" exit="close" variants={sidebarVariants}>
    <Nav>
      <Menu>
        <MenuItem value="home" route="home" spy smooth duration={500} closeMenu={closeMenu} />
        <MenuItem
          value="portfolio"
          route="portfolio"
          spy
          smooth
          duration={500}
          closeMenu={closeMenu}
        />
        <MenuItem
          value="about"
          route="about"
          spy
          smooth
          duration={500}
          offset={-100}
          closeMenu={closeMenu}
        />
        <MenuItem value="contact" route="contact" spy smooth duration={500} closeMenu={closeMenu} />
      </Menu>
    </Nav>
  </Wrapper>
);

export default SideBar;
