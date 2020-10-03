/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import 'typeface-montserrat';
import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;
