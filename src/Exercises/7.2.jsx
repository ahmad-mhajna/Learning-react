import React from "react";
import "./7.2 comp/7.2.css";

class Exercises extends React.Component {
  constructor() {
    super();
    this.state = {
      display: false,
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ display: !this.state.display });
          }}
        >
          show box / hide box
        </button>
        <div
          className="box"
          style={{ display: this.state.display ? "block" : "none" }}
        ></div>
      </div>
    );
  }
}

export default Exercises;
