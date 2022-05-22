import React from "react";
import "./style.css";
import BornBefore1990 from "./bornBefore1990.jsx";
import data from "./data.js";
import Name from "./Name.jsx";

class Exercise extends React.Component {
  state = { onlyNames: [], before1990: [] };
  getNames = () => {
    let names = data.map((name) => {
      return name.name;
    });
    this.setState({ onlyNames: names });
  };
  getbefore1990 = () => {
    let bornBefore1990 = [];
    data.forEach((person) => {
      let year = person.birthday.slice(
        person.birthday.length - 4,
        person.birthday.length
      );
      if (+year < 1990) {
        bornBefore1990.push(person);
      }
    });
    this.setState({ before1990: bornBefore1990 });
  };
  componentDidMount() {
    this.getNames();
    this.getbefore1990();
  }
  render() {
    return (
      <div>
        <Name names={this.state.onlyNames} />
        <BornBefore1990 before1990={this.state.before1990} />
      </div>
    );
  }
}
export default Exercise;
