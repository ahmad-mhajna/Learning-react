import axios from "axios";
import React, { useState, useEffect } from "react";
import Comp from "./comp";

const Exercise = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      <input
        type="checkbox"
        name=""
        id=""
        checked={hidden}
        onChange={(e) => {
          setHidden(e.target.checked);
        }}
      />
      {!hidden && <Comp />}
    </div>
  );
};
export default Exercise;
