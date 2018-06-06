import React from 'react';

const UserOutput = (props) => {
  return(
    <div className ="UserOutput">
      <p> Anything you want and {props.holder} </p>
    </div>
  )
};

export default UserOutput;
