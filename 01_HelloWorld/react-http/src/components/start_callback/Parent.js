import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function Parent() {
  const [age, setAge] = useState(15);
  const [salary, setSalary] = useState(540000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default Parent;
