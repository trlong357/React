import React from "react";
import Person from "./Person/Person";

const persons = (props) =>
  props.persons.map((person) => {
    return (
      <Person
        name={person.name}
        job={person.job}
        styleBackground={props.styleBackground}
        key={person.id}
        changed={props.changed}
      />
    );
  });
export default persons;
