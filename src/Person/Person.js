import React, { Component } from "react";
import "./Person.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Radium from "radium";
class Person extends Component {
  state = {
    show: true,
  };
  toggle = () => {
    let currentShow = this.state.show;
    this.setState({ show: !currentShow });
  };

  render() {
    const adjInput = {
      "@media (max-width: 460px)": {
        backgroundColor: "red",
        width: "80%",
      },
    };

    let showPerson = (
      <div>
        <p>
          I'm {this.props.name}, I'm {Math.floor(Math.random() * 100)} years old
          and I am {this.props.job}
        </p>
        <p>{this.props.children}</p>
        <input
          style={adjInput}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </div>
    );

    return (
      // <div className="Person col-6" onClick={this.toggle}>
      <div
        className="Person col-6"
        style={this.props.styleBackground}
        // onClick={this.toggle}
      >
        {this.state.show === true ? showPerson : null}
      </div>
    );
  }
}

export default Radium(Person);
