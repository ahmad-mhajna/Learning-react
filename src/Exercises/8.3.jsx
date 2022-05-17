import React from "react";
import "./8.3 comp/8.3.css";

class Exercises extends React.Component {
  state = { class: "purple" };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ class: "red" });
    }, 500);
    setTimeout(() => {
      this.setState({ class: "blue" });
    }, 1000);
    setTimeout(() => {
      this.setState({ class: "aqua" });
    }, 1500);
    setTimeout(() => {
      this.setState({ class: "black" });
    }, 2000);
    setTimeout(() => {
      this.setState({ class: "purple" });
    }, 2500);
    setTimeout(() => {
      this.setState({ class: "purple circle" });
    }, 3000);
  }
  render() {
    return (
      <div>
        <div className={`box1 ${this.state.class}`}></div>
      </div>
    );
  }
}

export default Exercises;
