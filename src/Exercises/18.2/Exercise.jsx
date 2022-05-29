import React, { useState } from "react";
function Exercise() {
  const [data, setData] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);
  const changeCompleted = (event) => {
    const text = event.target.innerText;
    const dataCopy = [...data];
    const objCopy = data.find((obj) => obj.name === text);
    objCopy.completed = !objCopy.completed;
    setData(dataCopy);
  };
  return (
    <div>
      {data.map((obj) => {
        return (
          <div>
            <button onClick={changeCompleted}>{obj.name}</button>
            <span>{obj.completed ? <>&#10004;</> : <>&#10008;</>}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Exercise;
