import "./App.css";
import Person from "./Person/Person";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    persons: [
      { name: "Long", job: "developer" },
      { name: "Truc", job: "block-chain developer" },
      { name: "Viet", job: "developer" },
      { name: "Tai", job: "photographer" },
    ],
    tempName: "long heo",
    leaderName: "",
    show: false,
  };
  switchNameBack = () => {
    this.setState({
      persons: [
        { name: "Long", job: "developer" },
        { name: "Truc", job: "block-chain developer" },
        { name: "Viet", job: "developer" },
        { name: "Tai", job: "photographer" },
      ],
    });
  };
  switchName = () => {
    console.log("clicked");
    this.setState({
      persons: [
        { name: "Long Tran", job: "developer" },
        { name: "Truc Pham", job: "block-chain developer" },
        { name: "Viet Trinh", job: "developer" },
        { name: "Tai Nguyen", job: "photographer" },
      ],
    });
  };

  changeName = (event) => {
    this.setState({
      tempName: event.target.value,
    });
  };

  personChanged = (event) => {
    this.setState({
      tempName: event.target.value,
    });
  };
  togglePersonsHandler = () => {
    let currentShow = this.state.show;
    this.setState({ show: !currentShow });
  };

  // switchLeader = (i) => {
  //   this.setState({ leaders: "Long" });
  //   console.log(this.state.leaders);
  // };
  render() {
    const style = {
      font: "inherit",
      border: "2px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.show) {
      persons = (
        <div className="row">
          <Person
            name={this.state.persons[0].name}
            job={this.state.persons[0].job}
          />
          <Person
            name={this.state.persons[1].name}
            job={this.state.persons[1].job}
          />
          <Person
            name={this.state.persons[2].name}
            job={this.state.persons[2].job}
          />
          <Person
            name={this.state.persons[3].name}
            job={this.state.persons[3].job}
          />
        </div>
      );
    }
    return (
      <div className="App container">
        <h1>IT team</h1>
        <p>Here are our members</p>
        {persons}
        {/* ------- */}
        {/* style={style} - the 2nd style is the const style created above */}
        <button style={style} onClick={() => this.togglePersonsHandler()}>
          Show list names
        </button>
        <button style={style} onClick={() => this.switchName()}>
          Change name
        </button>
        <button style={style} onClick={() => this.switchNameBack()}>
          Revert name
        </button>
        <h3>Leader's Name: {this.state.leaderName}</h3>
        <p>Type the input below to choose Leader</p>
        <input
          type="text"
          onChange={this.changeName}
          value={this.state.tempName}
        ></input>
      </div>
    );
  }
}

export default App;
