import React from 'react';
const ValComp = (props) => {

  let output = "String too short"

  if(props.length > 5){
    output = "String too long"
  }
  return(
    <div className ="ValComp">
      {output}
    </div>
  )
};

export default ValComp;
