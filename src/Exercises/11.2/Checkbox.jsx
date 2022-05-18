import React from "react";
class Checkbox extends React.Component {
  state = { isChecked: this.props.isChecked };
  render() {
    return (
      <p>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={() => {
            this.setState({ isChecked: !this.state.isChecked });
          }}
        />
        <em>Lorem ipsum dolor </em>
      </p>
    );
  }
}
export default Checkbox;
