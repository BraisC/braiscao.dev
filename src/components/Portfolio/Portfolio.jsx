import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';
import ItemList from './components/ItemList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 12rem;
  margin-top: 12rem;
`;

const Portfolio = () => (
  <Wrapper>
    <SectionTitle title="portfolio" subTitle="Check out my latest work" />
    <ItemList />
  </Wrapper>
);
export default Portfolio;
