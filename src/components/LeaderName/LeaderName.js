import React from "react";
import { Component } from "react";

class LeaderName extends Component {
  state = {
    leaderName: "long dep trai",
  };
  changeLeaderName = (event) => {
    this.setState({
      leaderName: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <h3>Leader's Name: {this.state.leaderName}</h3>
        <p>Type the input below to choose Leader</p>
        <input
          type="text"
          onChange={this.changeLeaderName}
          value={this.state.leaderName}
        ></input>
      </div>
    );
  }
}

export default LeaderName;
