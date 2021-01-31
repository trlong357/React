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
      { name: "Duc", job: "dancer" },
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
  deleteHandler = (personIndex) => {
    const personsDel = this.state.persons;
    personsDel.splice(personIndex, 1);
    this.setState({ persons: personsDel });
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
    let newPerson2 = [];

    for (let i = 0; i < this.state.persons.length; i++) {
      newPerson2.push(
        <Person
          name={this.state.persons[i].name}
          job={this.state.persons[i].job}
        />
      );
    }
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
          {/* {this.state.persons.forEach((newPerson) => {
            // console.log(newPerson);
            newPerson2.push(newPerson);
            return <Person name={newPerson.name} job={newPerson.job} />;
          })} */}
          {/* {newPerson2} */}
          {this.state.persons.map((newPerson, index) => {
            return (
              <Person
                name={newPerson.name}
                job={newPerson.job}
                clicked={() => this.deleteHandler(index)}
              />
            );
          })}
          {/* <Person
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
          /> */}
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
        {/* --------Button change name------ Lesson 40 */}
        {/* <button style={style} onClick={() => this.switchName()}>
          Change name
        </button>
        <button style={style} onClick={() => this.switchNameBack()}>
          Revert name
        </button> */}
        {/* ------- */}
        <h3>Leader's Name: {this.state.tempName}</h3>
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
