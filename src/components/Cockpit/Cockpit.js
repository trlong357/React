import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = (props) => {
  const classesAssign = [];

  if (props.show === true) {
    classesAssign.push(classes.red);
  }
  if (props.show === false) {
    classesAssign.push(classes.green);
  }
  return (
    <div>
      <h1 className={classesAssign}>IT team</h1>
      <p className={classes.myStyle}>Here are our members</p>
      <button className={props.buttonClass} onClick={props.clicked}>
        Show list names
      </button>
    </div>
  );
};

export default cockpit;
