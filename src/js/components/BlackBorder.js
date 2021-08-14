import React from 'react';


function BlackBorder(props) {
    return (
        <div className="transbox border border-dark rounded">
            {props.children}
        </div>
    )
}


export default BlackBorder;
