import { useState } from "react";

const TextContainer = ({ text, maxChar }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, maxChar) : text;
  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }
  return (
    <p>
      {resultString}
      <a href="#" onClick={toggleIsTruncated}>
        {isTruncated ? "Read More" : "Read less"}
      </a>
    </p>
  );
};
export default TextContainer;
