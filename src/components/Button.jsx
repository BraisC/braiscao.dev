import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  border: 1px solid var(--color-primary);
  color: var(--color-white);
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #71e2a662;
  }
`;

const Button = ({ children, className }) => (
  <StyledButton className={className}>{children}</StyledButton>
);

export default Button;
