import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import '../css/custom.css';

import Title from './components/Title';
import Version from './components/Version';
import Results from './components/Results';
import Options from './components/Options';


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
