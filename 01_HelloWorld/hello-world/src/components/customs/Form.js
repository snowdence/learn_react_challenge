import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "snowdence",
      comment: "Hello",
      topic: "vue",
    };
  }
  handleUserChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  handleTopicChange = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };
  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  };
  render() {
    const { username, comment, topic } = this.state;
    return (
      <div>
        Inputed : {username} <br />
        Comment : {comment} <br />
        Topic : {topic}
        <form>
          <div>
            <label>UserName: </label>
            <input
              type="text"
              value={username}
              onChange={this.handleUserChange}
            />
          </div>
          <div>
            <label>Comment: </label>

            <input
              type="text"
              value={comment}
              onChange={this.handleCommentChange}
            />
          </div>
          <div>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
