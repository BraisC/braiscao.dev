import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Element, Link } from 'react-scroll';
import Button from '../Button';
import Typer from './components/Typer';

config.autoAddCss = false;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 8rem 0;

  @media only screen and (max-width: 900px) {
    height: var(--app-height);
  }
`;

const StyledHeader = styled.h1`
  font-size: 9.6rem;
  font-weight: 700;
  width: 100%;

  @media only screen and (max-width: 900px) {
    font-size: 8rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 5rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 4.5rem;
  }
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
  margin-bottom: 12rem;
  width: 100%;
  @media only screen and (max-width: 900px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 400px) {
    font-size: 2.5rem;
  }
`;
const StyledTyper = styled(Typer)`
  color: var(--color-primary);
  font-size: 6.4rem;
  font-weight: 700;
  @media only screen and (max-width: 900px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

const ArrowLink = styled(Link)`
  font-size: 2.4rem;
  margin-top: 3rem;
  transition: all 0.2s ease;
  position: absolute;
  bottom: 3rem;
  cursor: pointer;
`;

const Arrow = styled(FontAwesomeIcon)`
  display: block;
`;

const StyledButton = styled(Button)`
  border: 1px solid var(--color-primary);
  color: var(--color-white);
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #71e2a662;
  }
  &:hover + ${ArrowLink} {
    transform: translateY(1rem);
  }
`;

const Home = () => (
  <Element name="home">
    <Wrapper>
      <StyledHeader>
        Hi, my name is <StyledName>Brais</StyledName>
      </StyledHeader>
      <StyledSubTitle>
        I am{' '}
        <StyledTyper
          cursorColor="#71e2a6"
          pauseTimer={1000}
          sentences={[
            'a web developer.',
            'from Spain.',
            'a self-learner.',
            'mastering Javascript.',
            'an inconformist.',
            'a geek.',
            'always learning!',
          ]}
        />
      </StyledSubTitle>

      <StyledButton as={Link} to="portfolio" spy smooth duration={500} offset={-100}>
        Let me show you my work
      </StyledButton>
      <ArrowLink to="portfolio" spy smooth duration={500} offset={-100}>
        <Arrow icon={faChevronDown} />
      </ArrowLink>
    </Wrapper>
  </Element>
);

export default Home;
