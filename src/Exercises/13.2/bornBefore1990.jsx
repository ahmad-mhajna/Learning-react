import React from "react";
import "./style.css";

class BornBefore1990 extends React.Component {
  render() {
    return (
      <div className="cards">
        {this.props.before1990.map((person) => {
          return (
            <div className="card">
              <p>name: {person.name}</p>
              <p>birthday: {person.birthday}</p>

              <ul>
                favoritefoods:
                <li>{person.favoriteFoods.meats[0]}</li>
                <li>{person.favoriteFoods.meats[1]}</li>
                <li>{person.favoriteFoods.fish}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
export default BornBefore1990;
