import React, { useEffect, useState } from "react";
import axios from "axios";

function Exercise() {
  const [joke, getjoke] = useState("");
  const [categories, getCategories] = useState([]);
  let getRandomJoke = async () => {
    let resposone = await axios.get("https://api.chucknorris.io/jokes/random");
    getjoke(resposone.data.value);
  };
  let getAllCategories = async () => {
    let resposone = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    getCategories(resposone.data);
  };
  let getCategoryJoke = async (category) => {
    let resposone = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    getjoke(resposone.data.value);
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div>
      <button onClick={getRandomJoke}>Random joke</button>
      {categories.map((category) => {
        return (
          <button
            onClick={() => {
              getCategoryJoke(category);
            }}
          >
            {category}
          </button>
        );
      })}
      <h2>{joke}</h2>
    </div>
  );
}
export default Exercise;
