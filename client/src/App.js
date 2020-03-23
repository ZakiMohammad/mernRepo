import React, { Component } from "react";
import axios from "axios";
import Header from "./component/Header";

import "./App.css";

class App extends Component {
  state = {
    title: "",
    body: "",
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  getBlogPost = () => {
    axios
      .get("/api")
      .then(response => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("data Has Been Recieved");
      })
      .catch(() => {
        alert("Error Retreiving Data!!!");
      });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = event => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    axios({
      url: "/api/save",
      method: "POST",
      data: payload
    })
      .then(() => {
        console.log("Data Has Been Sent to the Server");
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        console.log("Internal Server Error");
      });
  };

  resetUserInputs = () => {
    this.setState({
      title: "",
      body: ""
    });
  };

  displayBlogPost = posts => {
    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div key={index} className="blog-post_display">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  };

  render() {
    console.log("State ", this.state);
    return (
      <div className="app">
        <Header />
        <h2>Welcome To My Beest React app ever</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea
              placeholder="Body"
              name="body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
        <div className="blog-post">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    );
  }
}

export default App;
