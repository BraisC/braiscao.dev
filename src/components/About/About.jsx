import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Section from '../Section';

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
    <Section title="about" subTitle="In case you want to know me">
      <MDXProvider
        components={{
          /* Inline components, I could have defined styled components outside if I wanted */
          p: (props) => <p {...props} style={{ marginBottom: '2rem' }} />,
          span: (props) => <span {...props} style={{ color: 'var(--color-primary)' }} />,
        }}
      >
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </Section>
  );
};
export default About;
