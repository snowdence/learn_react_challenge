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
    return (
      <div>
        Inputed : {this.state.username} <br />
        Comment : {this.state.comment} <br />
        Topic : {this.state.topic}
        <form>
          <div>
            <label>UserName: </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUserChange}
            />
          </div>
          <div>
            <label>Comment: </label>

            <input
              type="text"
              value={this.state.comment}
              onChange={this.handleCommentChange}
            />
          </div>
          <div>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
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
