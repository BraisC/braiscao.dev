import React from 'react';
import styled from 'styled-components';

const BioText = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: justify;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const Bio = ({ children }) => <BioText>{children}</BioText>;

export default Bio;
