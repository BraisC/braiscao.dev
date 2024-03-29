/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import 'typeface-montserrat';
import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<div key="modal" id="modal" />]);
};
