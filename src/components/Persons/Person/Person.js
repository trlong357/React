import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import personClasses from "./Person.module.css";
import Aux from "/home/tony/React/src/hoc/Aux.js";
import PropTypes from "prop-types";
// import styled from "styled-components";
// https://styled-components.com/docs/basics#installation
import classes from "/home/tony/React/src/components/Persons/Person/Person.module.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
    // React.createRef is a method offerd on the React obj we're importing
  }

  state = {
    show: true,
  };

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  toggle = () => {
    let currentShow = this.state.show;
    this.setState({ show: !currentShow });
  };

  render() {
    console.log("[Person.js] rendering...");
    // const adjInput = {
    // "@media (max-width: 460px)": {
    //   backgroundColor: "red",
    //   width: "80%",
    // },
    // };

    // -----
    // luu y code css
    // const InputStyle = styled.input`
    //   @media (max-width: 450px) {
    //     background-color: red;
    //     width: 80%;
    //   }
    //   border: 2px solid red;
    // `;
    // ----
    let showPerson = (
      <Aux>
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>
        <p className={classes.white}>
          I'm {this.props.name}, I'm {Math.floor(Math.random() * 100)} years old
          and I am {this.props.job}
        </p>
        <p>{this.props.children}</p>
        <input
          // ref = {(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          className={personClasses.InputText}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </Aux>
    );
    // -----Errror-------
    // const rnd = Math.random();
    // if (rnd > 0.7) {
    //   throw new Error("sthing went wrong");
    // }
    // console.log(rnd);
    // ----------------------
    return (
      // <div className="Person col-6" onClick={this.toggle}>
      <div
        // onClick={this.toggle}
        className={personClasses.Person}
        style={this.props.styleBackground}
        // onClick={this.toggle}
      >
        {this.state.show === true ? showPerson : null}{" "}
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  changed: PropTypes.func,
};
export default Person;
