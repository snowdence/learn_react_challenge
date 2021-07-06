import logo from "./logo.svg";
import "./App.css";
import React from "react";
import PostList from "./components/posts/PostList";

function App() {
  return (
    <div className="App">
      <h1>Name</h1>
      <PostList />
    </div>
  );
}

export default App;
