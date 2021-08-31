import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

import Title from './components/Title';
import Version from './components/Version';
import Randomizer from './components/Randomizer';


function App() {
    return (
        <div className="App">
            <div className="Title">
                <Title />
            </div>
            <Randomizer />
            <footer>
                <div className="Version">
                    <Version />
                </div>
            </footer>
        </div>
    );
}


export default App;
