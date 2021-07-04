import React from "react";
import Person from "./Person";
export default function NameList() {
  const persons = [
    { name: "Clark", age: 11 },
    { name: "Diana", age: 20 },
    { name: "Brute", age: 23 },
  ];
  return (
    <div>
      {persons.map((person, idx) => {
        return <Person key={idx} person={person} />;
      })}
    </div>
  );
}
