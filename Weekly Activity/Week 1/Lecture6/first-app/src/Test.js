import React, { Component } from "react";
import "./text.css";
const Test = () => {
  return <h1>Hello from Test Component</h1>;
};

class Text extends Component {
  render() {
    console.log("Hello!");
    return (
      <div>
        <h1 id="testId">Hello from Text Component</h1>
      </div>
    );
  }
}

export default Test;
