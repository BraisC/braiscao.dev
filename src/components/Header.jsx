import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Wrapper = styled.header`
  margin-bottom: 1.4rem;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1240;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 100, quality: 100, traceSVG: { threshold: 254, color: "#71E2A6" }) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Content>
        <Img fixed={data.logo.childImageSharp.fixed} />
        <ul>
          <li>Uds</li>
          <li>Vuds</li>
          <li>Nods</li>
        </ul>
      </Content>
    </Wrapper>
  );
};

export default Header;
