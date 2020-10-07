import React, { useState } from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../Button';
import Modal from './Modal';

const Wrapper = styled.div`
  width: 33%;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 900px) {
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
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
  background-color: var(--color-translucid);
  @media only screen and (max-width: 900px) {
    padding: 5rem 4rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 7rem 4rem;
  }
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

const ModalContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 50rem;
  position: relative;

  @media only screen and (max-width: 900px) {
    max-width: 60rem;
  }

  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

const ModalImage = styled(Img)`
  width: 100%;
  margin-bottom: 2rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const ModalSubTitle = styled.h3`
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--color-primary);
  padding: 0 3rem;
  text-align: center;
`;

const ModalText = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: justify;
  padding: 2rem 3rem;

  & p {
    margin-bottom: 2rem;
  }

  & span {
    color: var(--color-primary);
  }
`;

const ModalButton = styled(Button)`
  margin: 1rem;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  const handleMove = () => {
    !isOpen && setIsVisible(true);
  };

  console.log(isOpen);
  return (
    <>
      <Wrapper
        onMouseEnter={() => setIsVisible(true)}
        onMouseMove={handleMove}
        onMouseLeave={() => setIsVisible(false)}
      >
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
      </Wrapper>

      <Modal closeHandler={closeModal} isOpen={isOpen}>
        <ModalContent>
          <ModalImage fluid={data.frontmatter.BigImage.childImageSharp.fluid} />
          <ModalTitle>{data.frontmatter.title}</ModalTitle>
          <ModalSubTitle>{data.frontmatter.stack}</ModalSubTitle>
          <MDXProvider components={{ ModalText }}>
            <MDXRenderer>{data.body}</MDXRenderer>
          </MDXProvider>
          <ModalButtons>
            {data.frontmatter.link && (
              <ModalButton href={data.frontmatter.link} target="_blank" rel="noreferrer">
                See it live
              </ModalButton>
            )}
            {data.frontmatter.repo && (
              <ModalButton href={data.frontmatter.repo} target="_blank" rel="noreferrer">
                Github Repo
              </ModalButton>
            )}
          </ModalButtons>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Item;
