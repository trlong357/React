import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name}, I'm {Math.floor(Math.random() * 100)} years old and I
        am {props.job}
      </p>
      <p>{props.children}</p>
      {/* <input type="text" onChange={props.changed} value={props.name}></input> */}
    </div>
  );
};

export default person;
