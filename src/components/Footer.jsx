import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const Wrapper = styled.footer`
  margin-top: 2rem;
`;

const Content = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 1.4rem;
  padding: 4rem 0;
`;

const Heart = styled(FontAwesomeIcon)`
  display: inline-block;
  color: red;
`;

const Footer = () => (
  <Wrapper>
    <Content>
      <span>
        Made with <Heart icon={faHeart} /> by Brais Cao ©{new Date().getFullYear()}
      </span>
    </Content>
  </Wrapper>
);

export default Footer;
