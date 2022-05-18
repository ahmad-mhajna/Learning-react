import React from "react";
import FormElements from "./FormElements";
import ConfirmForm from "./ConfirmForm";

class Exercise extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: "1-18",
    textarea: "",
    hidden: false,
  };
  render() {
    return (
      <>
        {!this.state.hidden && (
          <form>
            <FormElements
              placeholder="First name"
              type="input"
              value={this.state.firstName}
              onChange={(event) => {
                this.setState({ firstName: event.target.value });
              }}
            />
            <FormElements
              placeholder="Last name"
              type="input"
              value={this.state.lastName}
              onChange={(event) => {
                this.setState({ lastName: event.target.value });
              }}
            />
            <FormElements
              type="select"
              value={this.state.age}
              onChange={(event) => {
                this.setState({ age: event.target.value });
              }}
            />
            <FormElements
              placeholder="tell me about your self"
              type="textarea"
              value={this.state.textarea}
              onChange={(event) => {
                this.setState({ textarea: event.target.value });
              }}
            />
            <button
              type="button"
              onClick={() => {
                const condition =
                  this.state.firstName !== "" &&
                  this.state.lastName !== "" &&
                  this.state.age !== "" &&
                  this.state.textarea !== "";
                if (condition) this.setState({ hidden: true });
              }}
            >
              Submit
            </button>
          </form>
        )}
        {this.state.hidden && (
          <ConfirmForm
            {...this.state}
            onClick={() => {
              this.setState({ hidden: false });
            }}
          />
        )}
      </>
    );
  }
}
export default Exercise;
