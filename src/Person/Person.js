import React from "react";
import "./Person.css";
import "bootstrap/dist/css/bootstrap.min.css";

const person = (props) => {
  return (
    <div className="Person col-6">
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
