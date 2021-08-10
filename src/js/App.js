import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import '../css/custom.css';
import * as BTD6Data from '../js/btd6info.js';


function Title() {
  return (
    <div className="transbox">
			<h2 className="text-center btd6font">Bloons TD6 Randomizer</h2>
			<h4 className="text-center btd6font">Randomizes options for maps, hero selection, mode selection and tower selection</h4>
		</div>	
  );
}

function Options() {
  return (
    "spam"
  );
}

function Results() {
  return (
    "eggs"
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
      <div className="Options">
        <Options />
      </div>
      <div className="Results">
        <Results />
      </div>
      <footer>
        <div className="Version">
          <Version />
        </div>
      </footer>
    </div>
  );
}

export default App;
