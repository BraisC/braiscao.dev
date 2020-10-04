import React from 'react';
import styled from 'styled-components';
import Typer from '../components/Home/components/Typer';
import SEO from '../components/SEO';

const StyledHeader = styled.h1`
  font-size: 9.6rem;
  font-weight: 700;
`;

const StyledName = styled.span`
  color: var(--color-primary);
  display: block;
`;

const StyledSubTitle = styled.p`
  color: var(--color-white);
  font-size: 6.4rem;
  font-weight: 700;
  margin-top: 1.6rem;
`;
const StyledTyper = styled(Typer)`
  color: var(--color-primary);
  font-size: 6.4rem;
  font-weight: 700;
`;

const IndexPage = () => (
  <>
    <SEO />
    <StyledHeader>
      Hi, my name is <StyledName>Brais</StyledName>
    </StyledHeader>
    <StyledSubTitle>
      I am{' '}
      <StyledTyper
        cursorColor="#71e2a6"
        pauseTimer={1000}
        dataText={['a web developer.', 'from Spain.', 'passionate.', 'a geek.']}
      />
    </StyledSubTitle>
  </>
);

export default IndexPage;
