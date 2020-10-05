import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 33%;
`;

const Poster = styled(Img)`
  width: 100%;
`;

const Item = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <div>{data.title}</div>
      <div>{data.stack}</div>
      <Poster fluid={data.image.childImageSharp.fluid} />
    </Wrapper>
  );
};

export default Item;
