import React from 'react';
import Home from '../components/Home/Home';
import Portfolio from '../components/Portfolio/Portfolio';
import About from '../components/About/About';

import SEO from '../components/SEO';
import Contact from '../components/Contact/Contact';

const IndexPage = () => (
  <>
    <SEO />
    <Home />
    <Portfolio />
    <About />
    <Contact />
  </>
);
export default IndexPage;
