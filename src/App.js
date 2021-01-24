import "./App.css";
import Person from "./Person/Person";
import { Component } from "react";

class App extends Component {
  state = {
    persons: [
      { name: "Long", job: "developer" },
      { name: "Truc", job: "block-chain developer" },
      { name: "Viet", job: "developer" },
      { name: "Tai", job: "photographer" },
    ],
  };

  switchName = (newName) => {
    console.log("clicked");
    this.setState({
      persons: [
        { name: newName, job: "developer" },
        { name: "Truc Pham", job: "block-chain developer" },
        { name: "Viet Trinh", job: "developer" },
        { name: "Tai Nguyen", job: "photographer" },
      ],
      leaders: [],
    });
  };
  // switchLeader = (i) => {
  //   this.setState({ leaders: "Long" });
  //   console.log(this.state.leaders);
  // };
  render() {
    let Leader = this.props;
    return (
      <div className="App">
        <h1>IT team</h1>
        <p>Here are our members</p>
        <Person
          name={this.state.persons[0].name}
          job={this.state.persons[0].job}
          click={this.switchName.bind(this, "Long")}
        />
        <Person
          name={this.state.persons[1].name}
          job={this.state.persons[1].job}
        />
        <Person
          name={this.state.persons[2].name}
          job={this.state.persons[2].job}
        />
        <Person name="tai-props" job="photographer">
          My hobby is to be a photographer! Especially
        </Person>
        <h1>
          <Person
            name={this.state.persons[0].name}
            job={this.state.persons[0].job}
          />
        </h1>
        <h3>Leader's Name: {this.state.persons[0].name}</h3>
        <button onClick={() => this.switchName("Long Tran")}>
          Change name
        </button>
      </div>
    );
  }
}

export default App;
