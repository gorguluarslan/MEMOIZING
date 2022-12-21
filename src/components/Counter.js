import React, { useState } from "react";
import Header from "./Header";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("Counter component re-render");

  return (
    <div>
      {<Header count={count < 5 ? count : 5} />}

      <hr />
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Arttırır</button>
    </div>
  );
}

export default Counter;
