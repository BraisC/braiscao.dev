import React, { useState } from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../Button';
import Modal from './Modal';

const Wrapper = styled.div`
  width: 33%;
  position: relative;
  overflow: hidden;
`;

const Image = styled(Img)`
  width: 100%;
`;

const Overlay = styled(motion.article)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 4rem 3rem;
  background-color: #0a2027d8;
`;

const TitleWrapper = styled(motion.div)`
  text-transform: uppercase;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;

const SubTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-primary);
`;

const StyledButton = styled(Button)`
  padding: 1rem 4rem;
  font-size: 1.4rem;
`;

const overlayVariants = {
  open: {
    y: '0',
    transition: {
      delay: 0.3,
      duration: 0.15,
      when: 'beforeChildren',
      staggerChildren: 0.1,
      bounce: 0,
    },
  },
  close: {
    y: '100%',
    transition: {
      delay: 0.1,
      duration: 0.15,
      when: 'afterChildren',
      staggerChildren: 0.1,
      bounce: 0,
    },
  },
};

const childVariants = {
  open: {
    x: '0',
  },
  close: {
    x: '200%',
    transition: {
      duration: 0.1,
      bounce: 0,
    },
  },
};

const Item = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setIsVisible(false);
    // I suppose this is fine as it is not React-created DOM
    document.querySelector('body').classList.add('noscroll');
  };

  const closeModal = () => {
    setIsOpen(false);
    // I suppose this is fine as it is not React-created DOM
    document.querySelector('body').classList.remove('noscroll');
  };

  return (
    <Wrapper onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      <Image fluid={data.frontmatter.SmallImage.childImageSharp.fluid} />
      <AnimatePresence>
        {isVisible && (
          <Overlay
            key={data.frontmatter.title}
            initial="close"
            animate="open"
            exit="close"
            variants={overlayVariants}
          >
            <TitleWrapper variants={childVariants}>
              <Title>{data.frontmatter.title}</Title>
              <SubTitle>{data.frontmatter.stack}</SubTitle>
            </TitleWrapper>
            <motion.div variants={childVariants}>
              <StyledButton onClick={openModal}>More info</StyledButton>
            </motion.div>
          </Overlay>
        )}
      </AnimatePresence>
      {isOpen && (
        <Modal closeHandler={closeModal}>
          <div>{data.frontmatter.title}</div>
          <Image fluid={data.frontmatter.BigImage.childImageSharp.fluid} />
          <MDXRenderer>{data.body}</MDXRenderer>
        </Modal>
      )}
    </Wrapper>
  );
};
export default Item;
