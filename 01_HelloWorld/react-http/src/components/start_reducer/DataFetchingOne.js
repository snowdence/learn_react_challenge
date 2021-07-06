import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCESS":
      return { loading: false, error: "", post: action.payload };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went wrong",
        post: {},
      };
    default:
      return state;
  }
};

function DataFetchingOne() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1 `)
      .then((response) => {
        dispatch({ type: "FETCH_SUCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  const { loading, error, post } = state;

  return (
    <div>
      {loading ? "Loading" : post.title}
      <b style={{ color: "red" }}>{error ? error : ""}</b>
    </div>
  );
}

export default DataFetchingOne;
