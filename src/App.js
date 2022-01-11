import React, { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let quantity = parseInt(count);

    if (quantity <= 0) {
      quantity = 1
    }

    setText(data.slice(0, quantity));
  };

  return (
    <div className="container">
      <h1>
        Tired of Boring <strong>Lorem, ipsum?</strong>
      </h1>
      <form onSubmit={handleSubmit} id="form">
        <label htmlFor="quantity">
          <strong>Paragraphs: </strong>
        </label>
        <input
          name="quantity"
          id="quantity"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" id="btn">
          <strong>Generate</strong>
        </button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </div>
  );
}

export default App;
