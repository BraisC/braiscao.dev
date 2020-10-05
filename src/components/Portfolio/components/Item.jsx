import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Button from '../../Button';

const Wrapper = styled.div`
  width: 33%;
  position: relative;
`;

const Image = styled(Img)`
  width: 100%;
`;

const Overlay = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 4rem 3rem;
  background-color: #0a2027d8;
`;

const TitleWrapper = styled.div`
  text-transform: uppercase;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const SubTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-primary);
`;

const StyledButton = styled(Button)`
  padding: 1rem 4rem;
  font-size: 1.4rem;
`;

const Item = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <Image fluid={data.image.childImageSharp.fluid} />
      <Overlay>
        <TitleWrapper>
          <Title>{data.title}</Title>
          <SubTitle>{data.stack}</SubTitle>
        </TitleWrapper>
        <StyledButton>More info</StyledButton>
      </Overlay>
    </Wrapper>
  );
};

export default Item;
