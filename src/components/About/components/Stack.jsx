import React from 'react';
import styled from 'styled-components';

const StackText = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  width: 80%;
  margin-bottom: 2rem;

  span {
    font-weight: 700;
  }

  p {
    margin-bottom: 0.5rem;
  }

  &:last-of-type {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
`;

const Stack = ({ children }) => <StackText>{children}</StackText>;

export default Stack;
