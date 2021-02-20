import React from "react";
import { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[Persons.js] componentWillReceiveProps", props);
  // }
  // ------------------
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("[Persons.js] shouldComponentUpdate");
  //     // -------
  //     // this will be render only when u change Persons
  //     if (nextProps.persons !== this.props.persons) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //     // ------
  //   }
  //   ------------------

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }
  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person) => {
      return (
        <Person
          name={person.name}
          job={person.job}
          styleBackground={this.props.styleBackground}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
