import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const ItemList = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/content/portfolio/" } }
          sort: { fields: frontmatter___number, order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                stack
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <Wrapper>
      {data.allMdx.edges.map((item) => (
        <Item key={item.node.frontmatter.title} data={item.node.frontmatter} />
      ))}
    </Wrapper>
  );
};

export default ItemList;