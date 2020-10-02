import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  margin-top: 2rem;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1240;
  padding: 1.45rem 1.0875rem;
`;

const Footer = (props) => (
  <Wrapper>
    <Content>
      <span>
        Made with <i data-emoji="♥️" /> by Brais Cao ©{new Date().getFullYear()}
      </span>
    </Content>
  </Wrapper>
);

export default Footer;
