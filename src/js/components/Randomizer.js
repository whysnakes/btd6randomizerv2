import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

import CustomFormSwitch from './CustomFormSwitch';
import CustomFormSlider from './CustomFormSlider';
import OptionsFormContainer from './OptionsFormContainer';
import Results from './Results';
import * as randomizer from '../btd6randomizer';
import { btd6_towers } from '../btd6info';
import { shuffle } from '../random';
import PlayerNameInput from './PlayerNameInput';


function Randomizer() {
    const [playerCount, setPlayerCount] = useState(1);
    const [isRandomizeMap, setRandomizeMap] = useState(false);
    const [isRandomizeMode, setRandomizeMode] = useState(false);
    const [isRandomizeHeroes, setRandomizeHeroes] = useState(false);
    const [isRandomizeTowers, setRandomizeTowers] = useState(false);
    const [isRestrictTowerType, setRestrictTowerType] = useState(false);
    const [maxTowers, setMaxTowers] = useState(1);
    const [playerNames, setPlayerNames] = useState(["", "", "", ""]);

    const [final_playerCount, setFinal_playerCount] = useState(playerCount);
    const [randomMap, setRandomMap] = useState("");
    const [randomMode, setRandomMode] = useState("");
    const [randomHeroes, setRandomHeroes] = useState([]);
    const [randomTowers, setRandomTowers] = useState([]);
    const [final_playerNames, setFinal_playerNames] = useState([]);

    function generateRandomOptions(e) {
        e.preventDefault();  // Prevents the default behaviour of refreshing a page when submitting a form.

        // Reset all values to empty first.
        setRandomMap("");
        setRandomMode("");
        setRandomHeroes([]);
        setRandomTowers([]);

        setFinal_playerCount(playerCount);
        setFinalNames();

        if (isRandomizeMap) {
            setRandomMap(randomizer.getRandomMap());
        }
        if (isRandomizeMode) {
            setRandomMode(randomizer.getRandomMode(isRandomizeTowers));
        }
        if (isRandomizeHeroes) {
            const heroes_list = [];
            for (let i = 0; i < playerCount; i++) {
                heroes_list.push(randomizer.getRandomHero());
            }
            setRandomHeroes(heroes_list);
        }
        if (isRandomizeTowers) {
            let playerTowers = [];
            if(isRestrictTowerType) {
                let modes = Object.keys(btd6_towers);
                modes = shuffle(modes);
                for(let i = 0; i < playerCount; i++) {
                    let randomTowersByType = randomizer.getRandomTowers(maxTowers, modes[i]);
                    for(let j = 0; j < randomTowersByType.length; j++) {
                        playerTowers.push(randomTowersByType[j]);
                    }
                }
            }
            else {
                playerTowers = randomizer.getRandomTowers(maxTowers * playerCount);
            }
            setRandomTowers(playerTowers);
        }
    }

    function player_name_inputs(count) {
        function setName(name, index) {
            const names = [...playerNames];
            names[index] = name;
            setPlayerNames(names);
        }

        const inputs = [];
        for (let i = 0; i < count; i++) {
            inputs.push(<PlayerNameInput key={i} i={i + 1} value={playerNames[i]} onChange={({target: {value}}) => {setName(value, i)}} />);
        }
        return inputs;
    }

    function setFinalNames() {
        const final_names = [];
        for (let i = 0; i < playerCount; i++) {
            if (playerNames[i] === "") {
                final_names.push("Player ".concat(i + 1));
            }
            else {
                final_names.push(playerNames[i]);
            }
        }
        setFinal_playerNames(final_names);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="Options">
                        <OptionsFormContainer onSubmit={generateRandomOptions}>

                            {/* offset this option to align with other options */}
                            <Row>
                                <CustomFormSlider className="col-sm-11 offset-sm-1 mb-3" controlId="player_count" min="1" max="4" value={playerCount} onChange={({target:{value}}) => setPlayerCount(value)}>
                                    Number of players:
                                </CustomFormSlider>
                            </Row>

                            <div className="accordion mb-3" id="playerCount">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="playerCountHeader">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#playerCountContent" aria-expanded="false" aria-controls="playerCountContent">
                                            Player names:
                                        </button>
                                    </h2>
                                    <div id="playerCountContent" className="accordion-collapse collapse" aria-labelledby="playerCountHeader" data-bs-parent="#playerCount">
                                        <div className="accordion-body">
                                        {player_name_inputs(playerCount)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <CustomFormSwitch className="mb-3" checked={isRandomizeMap} onChange={() => setRandomizeMap(!(isRandomizeMap))}>
                                Randomize Map?
                            </CustomFormSwitch>

                            <CustomFormSwitch className="mb-3" checked={isRandomizeMode} onChange={() => setRandomizeMode(!(isRandomizeMode))}>
                                Randomize Mode?
                            </CustomFormSwitch>

                            <CustomFormSwitch className="mb-3" checked={isRandomizeHeroes} onChange={() => setRandomizeHeroes(!(isRandomizeHeroes))}>
                                Randomize Heroes?
                            </CustomFormSwitch>

                            <Form.Group as={Row} className="mb-3">
                                <CustomFormSwitch checked={isRandomizeTowers} onChange={() => setRandomizeTowers(!(isRandomizeTowers))}>
                                    Randomize Towers?
                                </CustomFormSwitch>
                                <Col sm={{span: 11, offset: 1}}>
                                    <Form.Text muted className="text-start ms-2">
                                        This option prevents <strong>X Monkeys Only</strong> modes from being picked.
                                    </Form.Text>
                                </Col>
                                <Col sm={{span: 11, offset: 1}}>
                                    <CustomFormSwitch checked={isRestrictTowerType} onChange={() => setRestrictTowerType(!(isRestrictTowerType))} disabled={!(isRandomizeTowers)}>
                                        Restrict each player to one tower type?
                                    </CustomFormSwitch>
                                </Col>
                                <CustomFormSlider className="mb-3 col-sm-11 offset-sm-1" controlId="tower_count" min="1" max="4" disabled={!(isRandomizeTowers)} value={maxTowers} onChange={({target:{value}}) => setMaxTowers(value)}>
                                    Towers per player:
                                </CustomFormSlider>
                            </Form.Group>

                        </OptionsFormContainer>
                    </div>
                </Col>

                <Col>
                    <div id="ResultsDiv" className="Results">
                        <Results
                            playerCount={final_playerCount}
                            playerNames={final_playerNames}
                            randomMap={randomMap}
                            randomMode={randomMode}
                            randomHeroes={randomHeroes}
                            randomTowers={randomTowers}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default Randomizer;
