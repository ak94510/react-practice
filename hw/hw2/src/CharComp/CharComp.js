import React from 'react';
import CharComp from './CharComp.css';
const charComp = (props) => {
  return(
    <div className ="CharComp">
      <p onClick = {props.click}>{props.character}</p>
    </div>
  )
};

export default charComp;
