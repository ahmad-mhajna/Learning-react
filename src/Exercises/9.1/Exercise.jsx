import React from "react";
import "./style.css";

class Exercises extends React.Component {
  state = { loading: true };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }
  render() {
    return (
      <div>
        {this.state.loading && (
          <div className="container">
            <div className="loader"></div>
          </div>
        )}
        <div>loading complete</div>
      </div>
    );
  }
}

export default Exercises;
