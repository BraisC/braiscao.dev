import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: var(--color-primary);
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 700;
`;
const SubTitle = styled.h3`
  color: var(--color-white);
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 8rem;
`;

const SectionTitle = ({ title, subTitle }) => (
  <>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
  </>
);

export default SectionTitle;
