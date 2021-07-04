import React from "react";

function Columns() {
  const items = [{ title: "a" }, { title: "b" }];
  return (
    <>
      {items.map((item) => {
        return (
          <React.Fragment>
            <h1>Title</h1>
            <p>{item.title}</p>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Columns;
