import React from "react";
import "./8.2 comp/8.2.css";

class Exercises extends React.Component {
  state = { class: "none" };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ class: "box" });
    }, 1000);
    setTimeout(() => {
      this.setState({ class: "" });
    }, 5000);
  }
  render() {
    return (
      <div>
        <div className={`box1 ${this.state.class}`}></div>
        <div className={`box2 ${this.state.class}`}></div>
        <div className={`box3 ${this.state.class}`}></div>
      </div>
    );
  }
}

export default Exercises;
