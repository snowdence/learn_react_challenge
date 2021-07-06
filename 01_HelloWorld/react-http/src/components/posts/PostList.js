import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errMsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
        console.log(response);
      })
      .catch((err) => {
        this.setState({
          errMsg: "Error when retreiving data",
        });
      });
  }
  render() {
    const { posts, errMsg } = this.state;
    return (
      <div>
        <div>
          <b>{errMsg ? errMsg : ""}</b>
        </div>
        List of posts
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    );
  }
}
