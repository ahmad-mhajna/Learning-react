import React, { useEffect, useState } from "react";
import axios from "axios";
function Exercise() {
  const [countryNames, addNames] = useState([]);
  const [searchKeywords, editNames] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://restcountries.com/v3.1/all");
      let country = data.data.map((counterInfo) => {
        let counterName = counterInfo.name.official;
        return counterName;
      });
      addNames(await country);
      editNames(await country);
    };
    getData();
  }, []);
  const search = (event) => {
    let input = event.target.value;
    let newarray = countryNames.filter((name) => {
      return name.toLowerCase().includes(input.toLowerCase());
    });
    editNames(newarray);
  };
  return (
    <div>
      <ul>
        <input type="text" placeholder="search" onChange={search} />
        {searchKeywords.map((country) => {
          return <li> {country} </li>;
        })}
      </ul>
    </div>
  );
}

export default Exercise;
