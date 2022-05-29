import React, { useState } from "react";
function Exercise() {
  const initialState = [
    { name: "one", checked: false },
    { name: "two", checked: false },
    { name: "three", checked: false },
    { name: "four", checked: false },
    { name: "five", checked: false },
  ];
  const [data, setData] = useState(initialState);
  const changeChecked = (event) => {
    const text = event.target.name;
    const dataCopy = [...data];
    const objCopy = data.find((obj) => obj.name === text);
    objCopy.checked = !objCopy.checked;
    setData(dataCopy);
  };
  const deleteChecked = () => {
    setData(data.filter((check) => !check.checked));
  };
  return (
    <div>
      <button onClick={deleteChecked}>delete</button>
      <button
        onClick={() => {
          setData(initialState);
        }}
      >
        reset
      </button>
      <ul>
        {data.map((check) => {
          return (
            <li>
              <input
                type="checkbox"
                onClick={changeChecked}
                name={check.name}
                checked={check.checked}
              />
              {check.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Exercise;
