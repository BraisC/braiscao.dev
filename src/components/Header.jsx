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
`;

const Logo = styled(Img)`
  width: 9rem;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, traceSVG: { threshold: 254, color: "#71E2A6" }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Content>
        <Logo fluid={data.logo.childImageSharp.fluid} />
      </Content>
    </Wrapper>
  );
};

export default Header;
