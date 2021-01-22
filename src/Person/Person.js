import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        I'm {props.name}, I'm {Math.floor(Math.random() * 100)} years old and I
        am {props.job}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
