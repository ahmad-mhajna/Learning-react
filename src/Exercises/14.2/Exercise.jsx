import React from "react";
class Exercise extends React.Component {
  textRef = React.createRef();
  copyText = () => {
    navigator.clipboard.writeText(this.textRef.current.value);
  };
  render() {
    return (
      <div
        className="flex-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          style={{ resize: "none" }}
          ref={this.textRef}
        ></textarea>
        <button type="button" onClick={this.copyText}>
          Copy
        </button>
      </div>
    );
  }
}
export default Exercise;
