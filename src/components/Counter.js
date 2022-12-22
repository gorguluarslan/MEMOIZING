import React, { useState } from "react";
// import Header from "./Header";
import User from "./User";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("Counter component re-render");

  const userData = {
    id: 1,
    name: "Mehmet",
  };

  return (
    <div>
      {/* {<Header count={count < 5 ? count : 5} />} */}
      <User data={userData} />

      <hr />
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Arttırır</button>
    </div>
  );
}

export default Counter;
