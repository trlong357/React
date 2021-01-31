import React, { Component } from "react";
import "./Person.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Person extends Component {
  state = {
    show: true,
  };

  toggle = () => {
    let currentShow = this.state.show;
    this.setState({ show: !currentShow });
  };

  render() {
    let showPerson = (
      <div onClick={this.props.clicked}>
        <p>
          I'm {this.props.name}, I'm {Math.floor(Math.random() * 100)} years old
          and I am {this.props.job}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </div>
    );

    return (
      // <div className="Person col-6" onClick={this.toggle}>
      <div className="Person col-6">
        {this.state.show === true ? showPerson : null}
      </div>
    );
  }
}

export default Person;
