import axios from "axios";
import React, { useState, useEffect } from "react";

function Comp() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const [data, setData] = useState({});
  useEffect(() => {
    const getdata = async () => {
      try {
        let result = await axios.get("https://swapi.dev/api/films/1/", {
          cancelToken: source.token,
        });
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    getdata();

    // cancel the request (the message parameter is optional)]
    return () => {
      console.log("cancel");
      source.cancel("Operation canceled by the user.");
    };
  }, []);
  return <div>{data.title}</div>;
}
export default Comp;
