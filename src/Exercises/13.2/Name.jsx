import React from "react";

class Name extends React.Component {
  render() {
    return (
      <div>
        {this.props.names.map((names) => {
          return <div> {names}</div>;
        })}
      </div>
    );
  }
}
export default Name;
