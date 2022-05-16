import React from "react";
import "./4.2.css";
// function Card(obj) {
//   return (
//     <div className="card">
//       <img src={obj.img} alt="img" />
//       <p>{obj.title}</p>
//       <p>{obj.text}</p>
//       <div>
//         <button>share</button> <button>explore</button>
//       </div>
//     </div>
//   );
// }
class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="img" />
        <p>{this.props.title}</p>
        <p>{this.props.text}</p>
        <div>
          <button>share</button> <button>explore</button>
        </div>
      </div>
    );
  }
}

export default Card;
