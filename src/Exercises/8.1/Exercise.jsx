import React from "react";

class Exercises extends React.Component {
  state = { favoriteColor: "red" };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "blue" });
    }, 1000);
  }
  componentDidUpdate() {
    const div = document.querySelector(".id");
    div.innerText = `The updated favorite color is: ${this.state.favoriteColor}`;
  }
  render() {
    return (
      <div>
        <h1>My fav color : {this.state.favoriteColor}</h1>
        <div className="id"></div>
      </div>
    );
  }
}

export default Exercises;
