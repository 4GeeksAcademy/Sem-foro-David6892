import React, { useState } from "react";

const Semaforo = () => {
  const [color, setColor] = useState("");

  const lightStyle = (activeColor) => ({
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    margin: "10px",
    backgroundColor: activeColor,
    opacity: color === activeColor ? 1 : 0.3,
    boxShadow: color === activeColor ? `0 0 20px 10px ${activeColor}` : "none",
    cursor: "pointer",
  });

 return (
    
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
      }}
    >
      
      <div
        style={{
          background: "black",
          width: "120px",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <div style={lightStyle("red")} onClick={() => setColor("red")} />
        <div style={lightStyle("yellow")} onClick={() => setColor("yellow")} />
        <div style={lightStyle("green")} onClick={() => setColor("green")} />
      </div>
    </div>
  );
};

export default Semaforo;