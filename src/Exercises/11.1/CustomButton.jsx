import React from "react";
class Button extends React.Component {
  state = { color: this.props.color };
  render() {
    return (
      <div>
        <button
          type="button"
          style={{ backgroundColor: this.state.color }}
          onClick={this.props.onClick}
        >
          {this.state.color}
        </button>
      </div>
    );
  }
}
export default Button;
