import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 12rem;
  margin-top: 12rem;
`;

const Portfolio = () => (
  <Wrapper>
    <SectionTitle title="about" subTitle="In case you want to know me" />
  </Wrapper>
);
export default Portfolio;
