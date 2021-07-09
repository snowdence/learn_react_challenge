import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of icecream - {numOfIceCreams}</h1>
      <button onClick={() => dispatch(buyIceCream())}>Buy icecream</button>
    </div>
  );
}

export default IceCreamContainer;
