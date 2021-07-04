import React from "react";

function MemoCmp({ name }) {
  console.log("Rendering memo ");
  return <div></div>;
}

export default React.memo(MemoCmp);
