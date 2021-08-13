import React from 'react';

import TextBTD6Font from './TextBTD6Font';


function Title() {
    return (
      <div className="transbox">
        <TextBTD6Font tag={"h2"} className="text-center">
          Bloons TD6 Randomizer
        </TextBTD6Font>
        <TextBTD6Font tag={"h4"} className="text-center">
          Randomizes options for maps, hero selection, mode selection and tower selection
        </TextBTD6Font>
      </div>
    );
  }

  
export default Title;
