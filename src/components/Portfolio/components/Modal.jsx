import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: red;
  padding: 12rem;
`;

const Modal = (props) => {
  const modalRoot = document.querySelector('#modal');

  return createPortal(
    <Wrapper>
      <button onClick={props.closeHandler}>CLOSE</button>
      {props.children}
    </Wrapper>,
    modalRoot
  );
};

export default Modal;
