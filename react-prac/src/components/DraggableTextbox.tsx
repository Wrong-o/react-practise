import React, { useState } from "react";

const DraggableTextbox: React.FC = () => {
  const [position, setPosition] = useState({x: 100, y: 100});
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({x: 0, y: 0});

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) =>  {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return(
    <div
    style={{
      position: "absolute",
      top:position.y,
      left: position.x ,
      cursor: "move",
      background: "#f0f0f0",
      padding: "10px",
      border: "1px solic #ccc",
      borderRadius: "4px",
      width: "200px",
    }}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onMouseLeave={handleMouseUp}
    >
    <input
    type="text"
    style={{
      width: "100%",
      border: "none",
      outline: "none",
      fontSize: "16px",
      padding: "5px",
    }}
    placeholder="Type something..."
    />
    </div>
  );
};

export default DraggableTextbox;
