import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import Typer from './components/Typer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12rem;
  margin-bottom: 12rem;
`;

const StyledHeader = styled.h1`
  font-size: 9.6rem;
  font-weight: 700;
  width: 100%;
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
`;
const StyledTyper = styled(Typer)`
  color: var(--color-primary);
  font-size: 6.4rem;
  font-weight: 700;
`;
const Arrow = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
  margin-top: 3rem;
  transition: all 0.2s ease;
`;

const StyledButton = styled(Button)`
  &:hover + ${Arrow} {
    transform: translateY(1rem);
  }
`;

const Home = (props) => (
  <Wrapper>
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

    <StyledButton>Let me show you my work</StyledButton>
    <Arrow icon={faChevronDown} />
  </Wrapper>
);

export default Home;
