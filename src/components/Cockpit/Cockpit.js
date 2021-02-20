import React, { useEffect, useRef } from "react";
// useEffect combines the functionality or the use cases you can
// cover of all these class-based lifcycle hooks

// Effects Hooks are equivalent to componentDidMount(),
// componentDidUpdate(), and componentWillUnmount() lifecycle methods.
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";
const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(
    () => {
      console.log("[Cockpit.js] useEffect");
      // can send HTTP requets or ...
      // const timer = setTimeout(() => {
      //   // alert("learn learn learn!");
      // }, 1000);

      // -----------
      toggleBtnRef.current.click();
      // useEffect doesn't run immediately -> can pass toggleBtnRef
      // -----------
      return () => {
        // clearTimeout(timer);
        console.log("Cockpit.js] cleanup work in useEffect");
      };
    },
    [] // --> this alert one first time
    //[props.show] //--> alert when u click button toggle
  );

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const classesAssign = [];

  if (props.show === true) {
    classesAssign.push("red");
  }
  if (props.show === false) {
    classesAssign.push("green");
  }
  return (
    <div>
      <h1 className={classesAssign}>{props.title}</h1>
      <p className={classes.myStyle}>Here are our members</p>
      <button
        ref={toggleBtnRef}
        className={props.buttonClass}
        onClick={props.clicked}
      >
        Show list names
      </button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
