import { useMemo, useState } from "react";
import "./App.css";
import Table from "./Component/Table";

function App() {
  const [count, setCount] = useState(0);
  const input = [
    { name: "text1", email: "ab@mqkl.com" },
    { name: "ab", email: "ab@mqil.com" },
    { name: "cd", email: "cd@mqil.com" },
  ];
  const data = useMemo(() => {
    return input;
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Table data={data} />
    </div>
  );
}

export default App;
