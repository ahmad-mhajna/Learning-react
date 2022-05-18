import React from "react";
import Checkbox from "./Checkbox";
class Exercise extends React.Component {
  state = { isChecked: "true" };
  render() {
    return (
      <div>
        <Checkbox />
        <Checkbox />
        <Checkbox isChecked={this.state.isChecked} />
        <Checkbox isChecked={this.state.isChecked} />
      </div>
    );
  }
}
export default Exercise;
