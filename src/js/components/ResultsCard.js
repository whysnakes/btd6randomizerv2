import React from 'react';
import PropTypes from 'prop-types';

import TextBTD6Font from './TextBTD6Font';


function ResultsCard(props) {
    return (
        <div className="card mb-2">
            <div className="card-header bg-dark text-white">
                <TextBTD6Font as={"h5"}>{props.title}</TextBTD6Font>
            </div>
            {props.children}
        </div>
    )
}

ResultsCard.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node  // Node just specifies that the prop should be anything that can be rendered.
}


export default ResultsCard;
