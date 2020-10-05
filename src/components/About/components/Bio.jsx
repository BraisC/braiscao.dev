import React from 'react';
import styled from 'styled-components';

const BioText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: justify;
`;

const Bio = ({ children }) => <BioText>{children}</BioText>;

export default Bio;
