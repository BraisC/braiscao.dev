import React from 'react';
import Home from '../components/Home/Home';
import Portfolio from '../components/Portfolio/Portfolio';
import About from '../components/About/About';

import SEO from '../components/SEO';

const IndexPage = () => (
  <>
    <SEO />
    <Home />
    <Portfolio />
    <About />
  </>
);
export default IndexPage;
