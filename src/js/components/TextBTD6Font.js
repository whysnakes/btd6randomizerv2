import React from 'react';


function TextBTD6Font(props) {
  const Tag = props.tag;  // Declare with leading capital letter so that React treats is as a component.
  const classes = props.classes + " btd6font";
  return <Tag className={classes}>{props.value}</Tag>;
}


export default TextBTD6Font;
