import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import TextBTD6Font from './TextBTD6Font';
import BlackBorder from './BlackBorder';


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
        <TextBTD6Font tag={"h2"} value={"Options"} classes={"text-center"} />
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

          <Form.Group as={Row} className="mb-3" controlId="random_map">
            <Col sm="auto" className="pt-2">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  name="randomize_map"
                  type="checkbox"
                  checked={isRandomizeMap}
                  onChange={() => setRandomizeMap(!(isRandomizeMap))}
                />
              </div>
            </Col>
            <Form.Label column sm="auto">
              Randomize Map?
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="random_mode">
            <Col sm="auto" className="pt-2">
              <div className="form-check form-switch">
                <input
                className="form-check-input"
                name="randomize_mode"
                type="checkbox"
                checked={isRandomizeMode}
                onChange={() => setRandomizeMode(!(isRandomizeMode))}
                />
              </div>
            </Col>
            <Form.Label column sm="auto">
              Randomize Mode?
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="random_heroes">
            <Col sm="auto" className="pt-2">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  name="randomize_heroes"
                 type="checkbox"
                 checked={isRandomizeHeroes}
                 onChange={() => setRandomizeHeroes(!(isRandomizeHeroes))}
                />
              </div>
            </Col>
            <Form.Label column sm="auto">
              Randomize Heroes?
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="random_towers">
            <Col sm="auto" className="pt-2">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  name="randomize_towers"
                 type="checkbox"
                 checked={isRandomizeTowers}
                 onChange={() => setRandomizeTowers(!(isRandomizeTowers))}
                />
              </div>
            </Col>
            <Form.Label column sm="auto">
              Randomize Towers?
            </Form.Label>
            <Form.Text muted className="text-start ms-5">
              This option prevents <strong>X Monkeys Only</strong> modes from being picked.
            </Form.Text>
            <Form.Group as={Row} className="ms-5" controlId="tower_type_restriction">
              <Col sm="auto" className="pt-2">
                <div className="form-check form-switch">
                  <input
                    disabled={!(isRandomizeTowers)}
                    className="form-check-input"
                    name="restrict_tower_type"
                    type="checkbox"
                    checked={isRestrictTowerType}
                    onChange={() => setRestrictTowerType(!(isRestrictTowerType))}
                  />
                </div>
              </Col>
              <Form.Label column sm="auto">
                Restrict each player to one tower type?
              </Form.Label>
            </Form.Group>
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
