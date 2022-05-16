import "./4.2.css";
function Card(obj) {
  return (
    <div className="card">
      <img src={obj.img} alt="img" />
      <p>{obj.title}</p>
      <p>{obj.text}</p>
      <div>
        <button>share</button> <button>explore</button>
      </div>
    </div>
  );
}

export default Card;
