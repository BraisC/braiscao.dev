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
              body
              frontmatter {
                title
                stack
                link
                repo
                SmallImage: image {
                  childImageSharp {
                    fluid(maxWidth: 520, quality: 75) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                BigImage: image {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
        <Item key={item.node.frontmatter.title} data={item.node} />
      ))}
    </Wrapper>
  );
};

export default ItemList;
