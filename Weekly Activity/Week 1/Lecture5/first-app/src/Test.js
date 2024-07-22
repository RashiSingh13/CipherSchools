import React, { Component } from "react";
const Test = () => {
  return <h1>Hello from Test Component</h1>;
};

class Text extends Component {
  render() {
    console.log("Hello!");
    return <h1>Hello from Text Component</h1>;
  }
}

export default Test;
