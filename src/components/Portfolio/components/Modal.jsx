import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import Button from '../../Button';

const Wrapper = styled.div`
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
  overflow: scroll;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  background-color: var(--color-black);
`;

const ModalButton = styled(Button)`
  margin: 2rem;
  align-self: flex-end;
`;

const Modal = (props) => {
  const modalRoot = document.querySelector('#modal');
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return createPortal(
    <Wrapper onClick={props.closeHandler}>
      <ContentWrapper onClick={handleClick}>
        <ModalButton onClick={props.closeHandler}>Close</ModalButton>
        {props.children}
      </ContentWrapper>
    </Wrapper>,
    modalRoot
  );
};

export default Modal;
