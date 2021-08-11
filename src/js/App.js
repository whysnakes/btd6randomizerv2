import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import '../css/custom.css';
import * as BTD6Data from '../js/btd6info.js';


function TextBTD6Font(props) {
  const Tag = props.tag;  // Declare with leading capital letter so that React treats is as a component.
  const classes = props.classes + " btd6font";
  return <Tag className={classes}>{props.value}</Tag>;
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
      <TextBTD6Font tag={"h2"} value={"Bloons TD6 Randomizer"} classes={"text-center"} />
      <TextBTD6Font tag={"h4"} value={"Randomizes options for maps, hero selection, mode selection and tower selection"} classes={"text-center"} />
		</div>
  );
}

function Options() {
  return (
    <BlackBorder>
      <TextBTD6Font tag={"h2"} value={"Options"} classes={"text-center"} />
    </BlackBorder>
  );
}

function Results() {
  return (
    <BlackBorder>
      <TextBTD6Font tag={"h2"} value={"Results"} classes={"text-center"}/>
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
