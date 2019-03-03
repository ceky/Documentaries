import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';

const AppTemplate = ({children}) => (
    <div className="page-template">
        <div>Header</div>
        <Menu />
        <div className="page-container">{children}</div>
        <div>Footer</div>
    </div>
);

AppTemplate.propTypes = {
    children: PropTypes.node,
};

export default AppTemplate;