import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../Button';

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color-translucid);
  padding: 10rem;
  margin-top: 1rem;
  overflow: auto;
  z-index: 4;
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  background-color: var(--color-black);
  box-shadow: 20px 20px 80px rgba(0, 0, 0, 0.55);
`;

const ModalButton = styled(Button)`
  margin: 2rem;
  align-self: flex-end;
`;

const modalVariants = {
  close: {
    opacity: 0,
    transition: {
      duration: 0.15,
      when: 'afterChildren',
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.15,
      when: 'beforeChildren',
    },
  },
};

const contentVariants = {
  close: {
    scale: 0.1,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Modal = (props) => {
  const modalRoot = useRef(null);

  useEffect(() => {
    modalRoot.current = document.querySelector('#modal');
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return modalRoot.current
    ? createPortal(
        <AnimatePresence>
          {props.isOpen && (
            <Wrapper
              onClick={props.closeHandler}
              key="modal"
              initial="close"
              animate="open"
              exit="close"
              variants={modalVariants}
            >
              <ContentWrapper onClick={handleClick} variants={contentVariants}>
                <ModalButton onClick={props.closeHandler}>Close</ModalButton>
                {props.children}
              </ContentWrapper>
            </Wrapper>
          )}
        </AnimatePresence>,
        modalRoot.current
      )
    : null;
};

export default Modal;
