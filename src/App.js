import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  const handleClearAll = () => {
    setPeople([]);
  };

  console.log(data);

  return (
    <>
      <div>
        <h1>{people.length} birthday</h1>
      </div>
      <List people={people} />
      <button onClick={handleClearAll}>Clear All</button>
    </>
  );
};

export default App;
