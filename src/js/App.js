import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import '../css/custom.css';
import * as BTD6Data from '../js/btd6info.js';

function H2BTD6Font (props) {
  return (
    <h2 className="text-center btd6font">{props.value}</h2>
  );
}

function H4BTD6Font (props) {
  return (
    <h4 className="text-center btd6font">{props.value}</h4>
  )
}

function BlackBorder(props) {
  return (
    <div className="transbox border border-dark rounded">
      {props.children}
    </div>
  )
}
function Title() {
  return (
    <div className="transbox">
      <H2BTD6Font value={"Bloons TD6 Randomizer"} />
      <H4BTD6Font value={"Randomizes options for maps, hero selection, mode selection and tower selection"} />
		</div>	
  );
}

function Options() {
  return (
    <BlackBorder>
      <H2BTD6Font value={"Options"} />
    </BlackBorder>
  );
}

function Results() {
  return (
    <BlackBorder>
      <H2BTD6Font value={"Results"} />
    </BlackBorder>
  );
}

function Version() {
  return (
    <div className="transbox w-100 fixed-bottom text-end">
				<a href="../../CHANGELOG.md" id="pagefooter" className="cleanlink mx-2">
          Version <strong>{BTD6Data.randomizer_version}</strong> based on BTD6 version <strong>{BTD6Data.btd6_version}</strong>
        </a>
		</div>
  )
}

function App() {
  return (
    <div className="App background">
      <div className="Title">
        <Title />
      </div>
      <Container>
        <Row>
          <Col>
            <div className="Options">
              <Options />
            </div>
          </Col>
          <Col>
            <div className="Results">
              <Results />
            </div>
          </Col>
        </Row>
      </Container>
      <footer>
        <div className="Version">
          <Version />
        </div>
      </footer>
    </div>
  );
}

export default App;
