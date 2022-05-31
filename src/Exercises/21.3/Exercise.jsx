import React, { useRef, useEffect } from "react";
import "./styles.css";
import img1 from "./download (1).jpg";
import img2 from "./download.jpg";
const Exercise = () => {
  const firstImg = useRef();
  const secondImg = useRef();
  useEffect(() => {
    [firstImg, secondImg].forEach((img) => {
      img.current.addEventListener("mouseenter", () => {
        img.current.classList.remove("grayscaled");
      });
      img.current.addEventListener("mouseleave", () => {
        img.current.classList.add("grayscaled");
      });
    });
  }, []);

  return (
    <div>
      <img src={img1} alt="nice place" className="grayscaled" ref={firstImg} />
      <img src={img2} alt="nice place" className="grayscaled" ref={secondImg} />
    </div>
  );
};
export default Exercise;
