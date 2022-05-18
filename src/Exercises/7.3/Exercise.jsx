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
            if (this.state.num < 10) {
              this.setState({ num: this.state.num + 1 });
            }
          }}
        >
          +
        </button>
        <p
          style={{
            color:
              this.state.num > 0
                ? "green"
                : this.state.num < 0
                ? "red"
                : "black",
          }}
        >
          {this.state.num}
        </p>
        <button
          onClick={() => {
            if (this.state.num > -10) {
              this.setState({ num: this.state.num - 1 });
            }
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default Exercises;
