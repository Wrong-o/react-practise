import React from 'react';
import HelloWorld from './HelloWorld';
import DraggableTextbox from "./components/DraggableTextbox";

const App: React.FC = () => {
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
    <DraggableTextbox />
    </div>
  );
};


export default App;

