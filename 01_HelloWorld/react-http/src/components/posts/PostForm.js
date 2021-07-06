import React, { Component } from "react";
import axios from "axios";
export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button onClick={this.submitHandler}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
