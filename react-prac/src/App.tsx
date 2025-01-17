import React, {useState} from 'react';
import DraggableTextbox from "./components/DraggableTextbox";

const App: React.FC = () => {
  const [textboxes, setTextboxes] = useState<number[]>([]);

  const addTextboxes = () => {
    const newTextboxes = Array.from(
      {length: 5},
      (_, i) => textboxes.length + i + 1
    );
    setTextboxes((prev)=> [...prev, ...newTextboxes]);
  };
  return (
    <div
    style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#eaeaea",
      overflow: "hidden",
      position: "relative",
    }}
    >
      <button
      onClick={addTextboxes}
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      >
      Add 5 textboxes
      </button>
      {textboxes.map((id) => (
        <DraggableTextbox key={id} />
      ))}
    </div>
  );
};


export default App;

