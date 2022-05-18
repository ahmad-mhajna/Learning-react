import React from "react";
class FormElements extends React.Component {
  render() {
    return (
      <p>
        {this.props.type !== "textarea" && this.props.type !== "select" && (
          <input
            onChange={this.props.onChange}
            value={this.props.value}
            placeholder={this.props.placeholder}
            type={this.props.type}
            required
          />
        )}
        {this.props.type === "textarea" && (
          <textarea
            onChange={this.props.onChange}
            value={this.props.value}
            placeholder={this.props.placeholder}
            cols="30"
            rows="10"
            required
          ></textarea>
        )}
        {this.props.type === "select" && (
          <select value={this.props.value} onChange={this.props.onChange}>
            <option value="1-18">1-18</option>
            <option value="19-30">19-30</option>
            <option value="31-50">31-50</option>
            <option value="51-80">51-80</option>
            <option value="81-100">81-100</option>
          </select>
        )}
      </p>
    );
  }
}
export default FormElements;
