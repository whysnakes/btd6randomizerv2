import React from 'react';

import TextBTD6Font from './TextBTD6Font';
import BlackBorder from './BlackBorder';
import ResultsCard from './ResultsCard';
import PlayerField from './PlayerField';


function Results(props) {

    const random_player_choices = (playerCount, heroes, towers) => {
        const choices = [];
        const towerCount = towers.length / playerCount;
        if (heroes.length > 0 || towers.length > 0) {
            for (let i = 1; i <= playerCount; i++) {
                choices.push(<PlayerField playerNo={i} hero={heroes[i-1]} towers={towers.slice((i - 1) * towerCount, i * towerCount)} />);
            }
        }
        return choices;
    }

    return (
        <BlackBorder>
            <TextBTD6Font tag={"h2"} className="text-center">
                Results
            </TextBTD6Font>

            {props.randomMap.length > 0 &&
                <ResultsCard title={"Map"}>
                    <div className="card-body">
                        <TextBTD6Font tag={"h5"}>{props.randomMap}</TextBTD6Font>
                    </div>
                </ResultsCard>
            }

            {props.randomMode.length > 0 &&
                <ResultsCard title={"Mode"}>
                    <div className="card-body">
                        <TextBTD6Font tag={"h5"}>{props.randomMode}</TextBTD6Font>
                    </div>
                </ResultsCard>
            }

            {random_player_choices(props.playerCount, props.randomHeroes, props.randomTowers)}

        </BlackBorder>
    );
  }


  export default Results;
