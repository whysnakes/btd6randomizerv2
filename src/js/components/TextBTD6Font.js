import React from 'react';


function TextBTD6Font(props) {
  const Tag = props.tag;  // Declare with leading capital letter so that React treats is as a component.
  const className = props.className + " btd6font";

  return (
    <Tag className={className}>
      {props.children}
    </Tag>
  )
}


export default TextBTD6Font;
