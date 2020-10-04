import React from 'react';
import styled from 'styled-components';
import Typer from '../components/Home/components/Typer';
import SEO from '../components/SEO';

const StyledTyper = styled(Typer)`
  color: var(--color-primary);
`;

const IndexPage = () => (
  <>
    <SEO />
    <h1>Hi, my name is Brais</h1>
    <p>I am a web developer</p>
    <span>HGola</span>
    <StyledTyper
      cursorColor="#71e2a6"
      dataText={[
        'Vinyl swag.',
        'Seitan jianbing.',
        'Enamel pin meditation.',
        'Denim seitan.',
        'Semiotics austin.',
        'Sriracha fanny pack.',
        'Vape raw dreamcatcher.',
        'Fam blog.',
        '90s church-key.',
        'Pabst distillery.',
        'Street art unicorn.',
      ]}
    />
  </>
);

export default IndexPage;
