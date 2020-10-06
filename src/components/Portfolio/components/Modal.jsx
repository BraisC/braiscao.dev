import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color-black);
  padding: 10rem;
  overflow: scroll;
`;

const Modal = (props) => {
  const modalRoot = document.querySelector('#modal');

  return createPortal(
    <Wrapper>
      <button style={{ position: 'fixed', top: '12rem', zIndex: '3' }} onClick={props.closeHandler}>
        CLOSE
      </button>
      {props.children}
    </Wrapper>,
    modalRoot
  );
};

export default Modal;
