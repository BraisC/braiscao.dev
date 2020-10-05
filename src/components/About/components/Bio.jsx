import React from 'react';
import styled from 'styled-components';

const BioText = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: justify;
  margin-bottom: 2rem;

  p {
    margin-bottom: 2rem;
  }
`;

const Bio = ({ children }) => <BioText>{children}</BioText>;

export default Bio;
