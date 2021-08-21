import React from 'react';
import PropTypes from 'prop-types';


function BlackBorder(props) {
    return (
        <div className="transbox border border-dark rounded">
            {props.children}
        </div>
    )
}

BlackBorder.propTypes = {
    children: PropTypes.node
}


export default BlackBorder;
