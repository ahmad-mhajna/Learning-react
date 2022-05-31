import React from "react";
import axios from "axios";

class Exercise extends React.Component {
  state = { joke: "", categories: [] };
  getRandomJoke = async () => {
    let resposone = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({ joke: resposone.data.value });
  };
  getAllCategories = async () => {
    let resposone = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categories: resposone.data });
  };
  getCategoryJoke = async (category) => {
    let resposone = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    this.setState({ joke: resposone.data.value });
  };
  componentDidMount() {
    this.getAllCategories();
  }
  render() {
    return (
      <div>
        <button onClick={this.getRandomJoke}>Random joke</button>
        {this.state.categories.map((category) => {
          return (
            <button
              onClick={() => {
                this.getCategoryJoke(category);
              }}
            >
              {category}
            </button>
          );
        })}
        <h2>{this.state.joke}</h2>
      </div>
    );
  }
}
export default Exercise;
