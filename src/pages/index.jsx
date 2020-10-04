import React from 'react';
import Typer from '../components/Home/components/Typer';
import SEO from '../components/SEO';

const IndexPage = () => (
  <>
    <SEO />
    <h1>Hi, my name is Brais</h1>
    <p>I am a web developer</p>
    <Typer
      heading="Things for hipsters:"
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
