import React from "react";
class ConfirmForm extends React.Component {
  render() {
    return (
      <form>
        <h3>{this.props.firstName}</h3>
        <h3>{this.props.lastName}</h3>
        <h3>{this.props.age}</h3>
        <h3>{this.props.textarea}</h3>
        <button onClick={this.props.onClick}>Back</button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default ConfirmForm;
