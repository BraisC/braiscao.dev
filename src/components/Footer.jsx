import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  margin-top: 2rem;
`;

const Content = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 1.4rem;
`;

const Footer = () => (
  <Wrapper>
    <Content>
      <span>
        Made with <i data-emoji="♥️" /> by Brais Cao ©{new Date().getFullYear()}
      </span>
    </Content>
  </Wrapper>
);

export default Footer;
