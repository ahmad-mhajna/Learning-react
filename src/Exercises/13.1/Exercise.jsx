import React from "react";
import axios from "axios";

class Exercise extends React.Component {
  state = { pplArr: [], search: [] };
  getData = async () => {
    const responseArr = await axios.get(
      "https://randomuser.me/api/?results=10"
    );
    const results = responseArr.data.results.map((result) => {
      return {
        name: `${result.name.title} ${result.name.first} ${result.name.last}`,
        avatar: result.picture.medium,
      };
    });
    this.setState({
      pplArr: results,
      search: results,
    });
  };
  searchBar = (event) => {
    let search = this.state.pplArr.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    if (event.target.value !== "" && event.target.value) {
      this.setState({ search });
    } else this.setState({ search: this.state.pplArr });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.searchBar} />
        {this.state.search.map((ppl, i) => {
          return (
            <div key={i}>
              {ppl.name}
              <p>
                <img src={ppl.avatar} alt="" />
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Exercise;
