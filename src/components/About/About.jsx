import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Element } from 'react-scroll';
import Button from '../Button';
import Section from '../Section';
import Bio from './components/Bio';
import Stack from './components/Stack';

import curriculum from '../../../static/cao-gonzalez-brais-cv.pdf';

const About = () => {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(fileAbsolutePath: { regex: "/content/about.mdx/" }) {
          body
        }
      }
    `
  );

  return (
    <Element name="about">
      <Section title="about" subTitle="In case you want to know me">
        <MDXProvider
          components={{
            Stack,
            Bio,
            /* Inline components, I could have defined styled components outside if I wanted */
            span: (props) => <span {...props} style={{ color: 'var(--color-primary)' }} />,
          }}
        >
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>

        <Button href={curriculum} target="_blank" rel="noreferrer">
          Check my CV
        </Button>
      </Section>
    </Element>
  );
};
export default About;
