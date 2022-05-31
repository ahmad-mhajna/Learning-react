import React, { useState, useEffect, useRef } from "react";
const Exercise = () => {
  const inputref = useRef();
  const [hidden, sethidden] = useState(true);
  useEffect(() => {
    if (inputref.current) inputref.current.focus();
  }, [hidden]);
  const edit = () => {
    sethidden(false);
  };
  const save = () => {
    sethidden(true);
  };
  return (
    <div>
      {!hidden && (
        <div>
          <input type="text" ref={inputref} />
          <button onClick={save}>save</button>
        </div>
      )}
      {hidden && (
        <div>
          <button onClick={edit}>Edit</button>
        </div>
      )}
    </div>
  );
};
export default Exercise;
