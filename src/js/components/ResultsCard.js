import React from 'react';

import TextBTD6Font from './TextBTD6Font';


function ResultsCard(props) {
    return (
        <div className="card mb-2">
            <div className="card-header bg-dark text-white">
                <TextBTD6Font tag={"h5"}>{props.title}</TextBTD6Font>
            </div>
            {props.children}
        </div>
    )
}


export default ResultsCard;
