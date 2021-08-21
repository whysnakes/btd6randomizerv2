import React from 'react';
import PropTypes from 'prop-types';


function TextBTD6Font(props) {
    // Declare variable 'Tag' with leading capital letter so that React treats is as a component.
    const Tag = ((props.as) ? props.as : "p");  // If tag not specified, just use the paragraph tag by default.
    const className = props.className + " btd6font";

    return (
        <Tag className={className}>
            {props.children}
        </Tag>
    )
}

TextBTD6Font.propTypes = {
    as: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired
}


export default TextBTD6Font;
