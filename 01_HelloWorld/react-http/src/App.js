import logo from "./logo.svg";
import "./App.css";
import React from "react";
import PostList from "./components/posts/PostList";
import PostForm from "./components/posts/PostForm";

function App() {
  return (
    <div className="App">
      <h1>Name</h1>
      <PostForm />
    </div>
  );
}

export default App;
