import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import personClasses from "./Person.module.css";
// import styled from "styled-components";
// https://styled-components.com/docs/basics#installation
import classes from "/home/tony/React/react-guide/src/CssModules/Styles.module.css";

class Person extends Component {
  state = {
    show: true,
  };
  toggle = () => {
    let currentShow = this.state.show;
    this.setState({ show: !currentShow });
  };

  render() {
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
      <div>
        <p className={classes.white}>
          I'm {this.props.name}, I'm {Math.floor(Math.random() * 100)} years old
          and I am {this.props.job}
        </p>
        <p>{this.props.children}</p>
        <input
          className={personClasses.InputText}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </div>
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
        className={personClasses.Person}
        style={this.props.styleBackground}
        // onClick={this.toggle}
      >
        {this.state.show === true ? showPerson : null}
      </div>
    );
  }
}

export default Person;
