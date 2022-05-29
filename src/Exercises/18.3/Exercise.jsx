import React, { useState } from "react";
import Input from "./input";
function Exercise() {
  const [secs, setSecs] = useState(0);
  const [mins, setMins] = useState(0);
  const [hours, setHours] = useState(0);
  function convert(event) {
    const num = event.target.value;
    const key = event.target.name;
    switch (key) {
      case "seconds":
        setSecs(num);
        setMins(+num / 60);
        setHours(+num / 3600);
        break;
      case "minutes":
        setSecs(+num * 60);
        setMins(num);
        setHours(+num / 60);
        break;
      case "hours":
        setSecs(+num * 3600);
        setMins(+num * 60);
        setHours(num);
        break;
    }
  }
  return (
    <div>
      <Input label="seconds" onInput={convert} value={secs} />
      <Input label="minutes" onInput={convert} value={mins} />
      <Input label="hours" onInput={convert} value={hours} />
    </div>
  );
}

export default Exercise;
