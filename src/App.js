import React, { useState } from "react";
import "./stile.css";

const App = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState(100);
  const [cuadros, setCuadros] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!color || isNaN(size)) {
      return;
    }
    const nuevoCuadro = {
      color,
      size,
    };
    setCuadros([...cuadros, nuevoCuadro]);
    setColor("");
  };

  return (
    <div className="container">
      <h1>Agregar cuadro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
        <br />
        <label htmlFor="size">Tamaño (px):</label>
        <input
          type="number"
          id="size"
          name="size"
          value={size}
          onChange={(event) => setSize(parseInt(event.target.value))}
        />
        <br />
        <button type="submit">Agregar</button>
      </form>
      <div className="cuadros">
        {cuadros.map((cuadro) => (
          <div
            key={cuadro.color}
            style={{
              backgroundColor: cuadro.color,
              width: `${cuadro.size}px`,
              height: `${cuadro.size}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
