import React from "react";

export default function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.name}, Age : {person.age}
      </h2>
    </div>
  );
}
