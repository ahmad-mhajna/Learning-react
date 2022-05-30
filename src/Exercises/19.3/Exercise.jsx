import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Exercise.css";
function Exercise() {
  const [resultArray, addResults] = useState([]);
  const [searchQuery, editNames] = useState("hooks");
  const [searchInput, addSearch] = useState("");
  const spinnerRef = useRef();
  useEffect(() => {
    const getData = async () => {
      spinnerRef.current.classList.remove("hidden");
      try {
        const data = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${searchQuery}`
        );
        let results = data.data.hits.map((resultInfo) => {
          let result = { name: resultInfo.title, url: resultInfo.url };
          return result;
        });
        addResults(await results);
      } catch (error) {
        console.error(error);
      }
      spinnerRef.current.classList.add("hidden");
    };
    getData();
  }, [searchQuery]);
  const search = (event) => {
    let input = event.target.value;
    addSearch(input);
  };

  const btnClick = () => {
    editNames(searchInput);
  };
  return (
    <div>
      <ul>
        <input
          type="text"
          placeholder="search"
          onChange={search}
          value={searchInput}
        />
        <button onClick={btnClick}>Search</button>
        {resultArray.map((result, i) => {
          return (
            <li key={i}>
              {" "}
              <a href={result.url} target="_blank">
                {result.name}
              </a>{" "}
            </li>
          );
        })}
      </ul>
      <div className="spinner hidden" ref={spinnerRef}>
        <div className="loader">Loading...</div>
      </div>
    </div>
  );
}

export default Exercise;
