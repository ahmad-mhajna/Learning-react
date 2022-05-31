import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
const Exercise = () => {
  const videoRef = useRef();
  const [isPlaying, updatePlay] = useState(false);
  return (
    <div>
      <ReactPlayer
        ref={videoRef}
        url="https://youtu.be/KaOHTtxLzH4"
        playing={isPlaying}
      />
      <button
        type="button"
        onClick={() => {
          updatePlay(!isPlaying);
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};
export default Exercise;
