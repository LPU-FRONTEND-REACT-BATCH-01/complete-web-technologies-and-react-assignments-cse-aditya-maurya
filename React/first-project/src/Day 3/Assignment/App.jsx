import React, { useState } from "react";

function App() {
  const images = [
    "https://picsum.photos/id/101/400/200",
    "https://picsum.photos/id/102/400/200",
    "https://picsum.photos/id/103/400/200",
  ];

  const [index, setIndex] = useState(0);
  
  const next = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      
      <div style={{ position: "relative", display: "inline-block" }}>
        
        <img src={images[index]} alt="img" />

        {/* Left Arrow */}
        <button
          onClick={prev}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer"
          }}
        >
          {"<"}
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer"
          }}
        >
          {">"}
        </button>

      </div>

    </div>
  );
}

export default App;