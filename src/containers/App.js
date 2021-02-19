import "./App.css";
import Persons from "../components/Persons/Persons";
// import Person from "../components/Persons/Person/Person";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Radium, { StyleRoot } from "radium";
// import styled from "styled-components";
import classes from "../CssModules/Styles.module.css";
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Cockpit from "../components/Cockpit/Cockpit";
import LeaderName from "../components/LeaderName/LeaderName";
import withClass from "../hoc/withClass.js";
import Aux from "../hoc/Aux";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    // this.state = {
    //   persons: [
    //     { id: "1", name: "Long", job: "developer" },
    //     { id: "2", name: "Truc", job: "block-chain developer" },
    //     { id: "3", name: "Viet", job: "developer" },
    //     { id: "4", name: "Tai", job: "photographer" },
    //   ],
    //   tempName: "long heo",
    //   show: false,
    //   color: "orange",
    // }; -----Old syntax to set state
  }
  state = {
    persons: [
      { id: "1", name: "Long", job: "developer" },
      { id: "2", name: "Truc", job: "block-chain developer" },
      { id: "3", name: "Viet", job: "developer" },
      { id: "4", name: "Tai", job: "photographer" },
    ],
    tempName: "long heo",
    show: false,
    color: "orange",
    showCockpit: true,
    changeCounter: 0,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }
  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    // return fasle;
    // if return false: preventing the update
    return true;
  }

  // ----------Function------------
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
    // console.log("clicked");
    this.setState({
      persons: [
        { name: "Long Tran", job: "developer" },
        { name: "Truc Pham", job: "block-chain developer" },
        { name: "Viet Trinh", job: "developer" },
        { name: "Tai Nguyen", job: "photographer" },
      ],
    });
  };

  changeColor = (event) => {
    this.setState({
      color: event.target.value,
    });
  };
  deleteHandler = (personIndex) => {
    // const personsDel = this.state.persons.slice(); ---copy state.persons to personDel
    // ----
    // es6
    const personsDel = [...this.state.persons];
    // ----
    personsDel.splice(personIndex, 1);
    this.setState({ persons: personsDel });
  };

  personNameChanged = (event, id) => {
    // findIndex() : find element in arr but then get index of that element
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const nameChange = {
      ...this.state.persons[personIndex],
    };

    nameChange.name = event.target.value;

    const nameChanges = [...this.state.persons];

    nameChanges[personIndex] = nameChange;
    this.setState((prevState, props) => {
      return {
        persons: nameChanges,
        changeCounter: this.state.changeCounter + 1,
      };
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
    console.log("[App.js] render");
    // ---------
    // let newPerson2 = [];

    // for (let i = 0; i < this.state.persons.length; i++) {
    //   newPerson2.push(
    //     <Person
    //       name={this.state.persons[i].name}
    //       job={this.state.persons[i].job}
    //     />
    //   );
    // }
    // -----------

    // ----------------
    // const style = {
    // color: "white",
    // backgroundColor: "green",
    // font: "inherit",
    // border: "2px solid blue",
    // padding: "8px",
    // cursor: "pointer",
    // ":hover": {
    //   color: "black",
    //   backgroundColor: "lightgreen",
    // },
    // };
    // -------------------
    let btnClass = "";
    // ----styled Component-----
    // let ButtonStyle = styled.button`
    //   color: white;
    //   background-color: ${(props) => (props.alt ? "red" : "green")};
    //   font: inherit;
    //   border: 2px solid blue;
    //   padding: 8px;
    //   cursor: pointer;
    //   &:hover {
    //     color: black;
    //     background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    //   }
    // `;
    // ----------------------------------
    const styleBox = {
      backgroundColor: this.state.color,
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
          <Persons
            persons={this.state.persons}
            styleBackground={styleBox}
            changed={this.personNameChanged}
          />
          {/* {this.state.persons.map((newPerson, index) => {
            return (
              <Person
                name={newPerson.name}
                job={newPerson.job}
                styleBackground={styleBox}
                // ----
                // key: allow react to keep track of the individual element
                key={newPerson.id}
                // ----
                changed={(event) => this.personNameChanged(event, newPerson.id)}
              />
            );
          })} */}
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
      // ------
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   color: "black",
      //   backgroundColor: "salmon",
      // };
      // -----
      btnClass = classes.red;
    }
    // let classesAssign = [];
    // -----
    // ---Class Names Dynamically
    // if (this.state.show === true) {
    //   classesAssign.push(classes.red);
    // }
    // if (this.state.show === false) {
    //   classesAssign.push(classes.green);
    // }
    // ----

    return (
      <Aux>
        {/* <h1 className={classesAssign}>IT team</h1>
        <p className={classes.myStyle}>Here are our members</p> */}
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            // nameClass={classesAssign}
            buttonClass={btnClass}
            show={this.state.show}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {persons}

        {/* ------- */}
        {/* style={style} - the 2nd style is the const style created above */}
        {/* ----- */}
        {/* <button style={style} onClick={() => this.togglePersonsHandler()}>
          Show list names
        </button> */}
        {/* <button
          className={btnClass}
          onClick={() => this.togglePersonsHandler()}
        >
          Show list names
        </button> */}
        {/* ----- */}
        {/* --------Button change name------ Lesson 40 */}
        {/* <button style={style} onClick={() => this.switchName()}>
          Change name
        </button>
        <button style={style} onClick={() => this.switchNameBack()}>
          Revert name
        </button> */}
        {/* ------- */}
        <h3>Type the input below to change color of boxes</h3>
        <input
          type="text"
          onChange={this.changeColor}
          value={this.state.color}
        ></input>
        {/* <h3>Leader's Name: {this.state.tempName}</h3>
        <p>Type the input below to choose Leader</p>
        <input
          type="text"
          onChange={this.changeLeaderName}
          value={this.state.tempName}
        ></input> */}
        <LeaderName />
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
// export default App;
// Radium('name') -- called a higher order component
