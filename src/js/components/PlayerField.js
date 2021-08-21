import React from 'react';
import PropTypes from 'prop-types';

import TextBTD6Font from './TextBTD6Font';
import ResultsCard from './ResultsCard';


const TowerListItem = (props) => {
    return <TextBTD6Font as={"li"} className="list-group-item">Tower {props.towerNo}: {props.tower}</TextBTD6Font>;
}

TowerListItem.propTypes = {
    towerNo: PropTypes.number.isRequired,
    tower: PropTypes.string.isRequired
}

const PlayerField = (props) => {
    const towers = [];
    for (let i = 1; i <= props.towers.length; i++) {
        towers.push(<TowerListItem towerNo={i} tower={props.towers[i-1]} />);
    }
    return (
        <ResultsCard title={"Player ".concat(props.playerNo)}>
            <ul className="list-group list-group flush">
                {props.hero && <TextBTD6Font as={"li"} className="list-group-item">Hero: {props.hero}</TextBTD6Font>}
                {props.towers.length > 0 && towers}
            </ul>
        </ResultsCard>
    )
}

PlayerField.propTypes = {
    hero: PropTypes.string,
    towers: PropTypes.arrayOf(PropTypes.string)
}


export default PlayerField;
