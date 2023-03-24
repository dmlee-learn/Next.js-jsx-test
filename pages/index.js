import { useState } from "react";

export default function home() {
  const [counter, setCounter] = useState(0);
  
  return (
    <div>
      <h1>hello {counter}</h1>
      <button onClick={() => setCounter(counter+1)}>+</button>
      <button onClick={() => setCounter((current) => current + 1)}>++</button>
    </div>
  );
}