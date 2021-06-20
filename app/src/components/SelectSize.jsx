import React, { useState } from "react";



const lists = [
  { id: 1, title: "8.5 " },
  { id: 2, title: "9" },
  { id: 3, title: "9.5" },
  { id: 4, title: "10" },
  { id: 5, title: "10.5" },
];
export default function App() {
  const [selected, setSelected] = useState(0);
  const [state, setState] = useState({
    name: "bob",
    color: "blue"
  });

  const handleColor = (row) => {
    setSelected(row.id);
  };

  return (

    
    <div className="select-size">
        <h4>size</h4>
      {lists.map((list) => (
        <button
          key={list.id}
          onClick={() => handleColor(list)}
          style={{ backgroundColor: list.id === selected ? "grey" : "" } }
        >
          {list.title}
        </button>
      ))}
    </div>
  );
}
