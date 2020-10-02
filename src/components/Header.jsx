import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  margin-bottom: 1.4rem;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1240;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Content>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Content>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
