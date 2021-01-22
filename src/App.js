import "./App.css";
import Person from "./Person/Person";
import { Component } from "react";
class App extends Component {
  state = {
    persons: [
      { name: "Tony", job: "developer" },
      { name: "Truc", job: "block-chain developer" },
      { name: "Viet", job: "developer" },
      { name: "Tai", job: "photographer" },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>
          <Person
            name={this.state.persons[0].name}
            job={this.state.persons[0].job}
          />
        </h1>
        <h3>Im leading a project</h3>
        <p>Here are our members</p>
        <button>Change leader</button>
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
        >
          My hobby is to be a photographer! Especially
        </Person>
      </div>
    );
  }
}

export default App;
