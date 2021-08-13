import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import TextBTD6Font from './TextBTD6Font';
import BlackBorder from './BlackBorder';
import CustomFormSwitch from './CustomFormSwitch';


function Options() {
    const [playerCount, setPlayerCount] = useState(1);
    const [isRandomizeMap, setRandomizeMap] = useState(false);
    const [isRandomizeMode, setRandomizeMode] = useState(false);
    const [isRandomizeHeroes, setRandomizeHeroes] = useState(false);
    const [isRandomizeTowers, setRandomizeTowers] = useState(false);
    const [isRestrictTowerType, setRestrictTowerType] = useState(false);
    const [maxTowers, setMaxTowers] = useState(1);

    return (
      <BlackBorder>
        <TextBTD6Font tag={"h2"} className="text-center">
          Options
        </TextBTD6Font>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="player_count">
            <Form.Label column sm="auto">
              Number of players:
            </Form.Label>
            <Col sm="auto">
              <Form.Control
                type="number"
                min="1"
                max="4"
                value={playerCount}
                onChange={({target:{value}}) => setPlayerCount(value)}
              />
            </Col>
          </Form.Group>

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
            <Form.Text muted className="text-start ms-5">
              This option prevents <strong>X Monkeys Only</strong> modes from being picked.
            </Form.Text>
            <CustomFormSwitch className="ms-5" checked={isRestrictTowerType} onChange={() => setRestrictTowerType(!(isRestrictTowerType))} disabled={!(isRandomizeTowers)}>
              Restrict each player to one tower type?
            </CustomFormSwitch>
            <Form.Group as={Row} className="ms-5 mb-3" controlId="tower_count">
              <Form.Label column sm="auto">
                Maximum tower options per player:
              </Form.Label>
              <Col sm="auto">
                <Form.Control
                  type="number"
                  min="1"
                  max="4"
                  disabled={!(isRandomizeTowers)}
                  value={maxTowers}
                  onChange={({target:{value}}) => setMaxTowers(value)}
                />
              </Col>
            </Form.Group>
          </Form.Group>

          <Button type="button" id="generator_btn" className="col-3 btn btn-primary mt-5 mb-3">Generate</Button>

        </Form>
      </BlackBorder>
    );
  }


  export default Options;
