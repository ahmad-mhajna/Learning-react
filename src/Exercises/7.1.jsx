import React from "react";

class Exercises extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ num: this.state.num + 1 });
          }}
        >
          +
        </button>
        <p>{this.state.num}</p>
      </div>
    );
  }
}

export default Exercises;
