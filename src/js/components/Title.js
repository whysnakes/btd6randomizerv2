import React from 'react';

import TextBTD6Font from './TextBTD6Font';


function Title() {
    return (
      <div className="transbox">
        <TextBTD6Font tag={"h2"} value={"Bloons TD6 Randomizer"} classes={"text-center"} />
        <TextBTD6Font tag={"h4"} value={"Randomizes options for maps, hero selection, mode selection and tower selection"} classes={"text-center"} />
          </div>
    );
  }

  
export default Title;
