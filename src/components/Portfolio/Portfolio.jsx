import React from 'react';
import { Element } from 'react-scroll';
import Section from '../Section';
import ItemList from './components/ItemList';

const Portfolio = () => (
  <>
    <Element name="portfolio" />
    <Section title="portfolio" subTitle="Check out my latest work">
      <ItemList />
    </Section>
  </>
);
export default Portfolio;
