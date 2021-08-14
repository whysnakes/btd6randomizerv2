import React from 'react';

import TextBTD6Font from './TextBTD6Font';
import BlackBorder from './BlackBorder';


function Results() {
    return (
        <BlackBorder>
            <TextBTD6Font tag={"h2"} className="text-center">
                Results
            </TextBTD6Font>

            <div id="random_map" className="card mb-2">
                <div className="card-header bg-dark text-white">
                    <h5 className="btd6font" >Map</h5>
                </div>
                <div className="card-body">
                    <h5 id="random_map_result" className="btd6font"></h5>
                </div>
            </div>

            <div id="random_mode" className="card mb-2">
                <div className="card-header bg-dark text-white">
                    <h5 className="btd6font" >Mode</h5>
                </div>
                <div className="card-body">
                    <h5 id="random_mode_result" className="btd6font"></h5>
                </div>
            </div>

            <div id="player_1" className="card mb-2">
                <div className="card-header bg-dark text-white">
                    <h5 className="btd6font" >Player 1</h5>
                </div>
                <ul className="list-group list-group flush">
                    <li id="player_1_hero" className="list-group-item btd6font"></li>
                    <li id="player_1_tower_1" className="list-group-item btd6font"></li>
                    <li id="player_1_tower_2" className="list-group-item btd6font"></li>
                    <li id="player_1_tower_3" className="list-group-item btd6font"></li>
                    <li id="player_1_tower_4" className="list-group-item btd6font"></li>
                </ul>
            </div>
            <div id="player_2" className="card mb-2">
                <div className="card-header bg-dark text-white">
                    <h5 className="btd6font" >Player 2</h5>
                </div>
                <ul className="list-group list-group flush">
                    <li id="player_2_hero" className="list-group-item btd6font"></li>
                    <li id="player_2_tower_1" className="list-group-item btd6font"></li>
                    <li id="player_2_tower_2" className="list-group-item btd6font"></li>
                    <li id="player_2_tower_3" className="list-group-item btd6font"></li>
                    <li id="player_2_tower_4" className="list-group-item btd6font"></li>
                </ul>
            </div>
            <div id="player_3" className="card mb-2">
                <div className="card-header bg-dark text-white">
                    <h5 className="btd6font" >Player 3</h5>
                </div>
                <ul className="list-group list-group flush">
                    <li id="player_3_hero" className="list-group-item btd6font"></li>
                    <li id="player_3_tower_1" className="list-group-item btd6font"></li>
                    <li id="player_3_tower_2" className="list-group-item btd6font"></li>
                    <li id="player_3_tower_3" className="list-group-item btd6font"></li>
                    <li id="player_3_tower_4" className="list-group-item btd6font"></li>
                </ul>
            </div>
            <div id="player_4" className="card mb-2">
                <div className="card-header bg-dark text-white">
                    <h5 className="btd6font" >Player 4</h5>
                </div>
                <ul className="list-group list-group flush">
                    <li id="player_4_hero" className="list-group-item btd6font"></li>
                    <li id="player_4_tower_1" className="list-group-item btd6font"></li>
                    <li id="player_4_tower_2" className="list-group-item btd6font"></li>
                    <li id="player_4_tower_3" className="list-group-item btd6font"></li>
                    <li id="player_4_tower_4" className="list-group-item btd6font"></li>
                </ul>
            </div>

        </BlackBorder>
    );
  }


  export default Results;
