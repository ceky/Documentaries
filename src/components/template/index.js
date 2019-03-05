import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import './index.css';

const AppTemplate = ({children}) => (
  <div className="page-template">
    <Menu />
    <main className="page-container">{children}</main>
  </div>
);

AppTemplate.propTypes = {
  children: PropTypes.node,
};

export default AppTemplate;