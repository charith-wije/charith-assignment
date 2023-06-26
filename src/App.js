import { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [value1, Setvalue1] = useState(0);

  return (
    <div className="App">
      <input
        type="email"
        value={value}
        placeholder="Enter Email"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <input
        type="number"
        value={value1}
        placeholder="Enter Number"
        onChange={(e) => {
          Setvalue1(e.target.value);
        }}
      />
      {value1 % 2 === 0 ? (
        <div>number is not odd</div>
      ) : (
        <div>number is odd</div>
      )}
    </div>
  );
};

export default App;
