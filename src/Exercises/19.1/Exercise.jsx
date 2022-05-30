import React, { useEffect, useState } from "react";
import axios from "axios";
function Exercise() {
  const [movie, updateMovieData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://swapi.dev/api/films/1/");
      let array = [];
      array.push(data.data.title, data.data.producer);
      updateMovieData(array);
    };
    getData();
  }, []);
  return (
    <div>
      <p> title :{movie[0]} </p>
      <p>producer :{movie[1]}</p>
    </div>
  );
}

export default Exercise;
