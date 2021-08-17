import React from 'react';

import TextBTD6Font from './TextBTD6Font';
import BlackBorder from './BlackBorder';
import ResultsCard from './ResultsCard';


function Results(props) {

    const random_player_choices = (heroes, towers) => {
        console.log(heroes);
        const PlayerField = (props) => {

            const TowerListItem = (props) => {
                return <TextBTD6Font tag={"li"} className="list-group-item">Tower {props.towerNo}: {props.tower}</TextBTD6Font>;
            }

            const towers = [];
            for (let i = 1; i <= props.towers.length; i++) {
                towers.push(<TowerListItem towerNo={i} tower={props.towers[i-1]} />);
            }
            return (
                <ResultsCard title={"Player ".concat(props.playerNo)}>
                    <ul className="list-group list-group flush">
                        {props.hero.length > 0 && <TextBTD6Font tag={"li"} className="list-group-item">Hero: {props.hero}</TextBTD6Font>}
                        {props.towers.length > 0 && towers}
                    </ul>
                </ResultsCard>
            )
        }

        const choices = [];
        const playerCount = heroes.length;
        const towerCount = towers.length / heroes.length;
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

            {random_player_choices(props.randomHeroes, props.randomTowers)}

        </BlackBorder>
    );
  }


  export default Results;
