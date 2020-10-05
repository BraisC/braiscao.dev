import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 12rem;
  margin-top: 12rem;
`;

const Section = ({ title, subTitle, children }) => (
  <Wrapper>
    <SectionTitle title={title} subTitle={subTitle} />
    {children}
  </Wrapper>
);
export default Section;
