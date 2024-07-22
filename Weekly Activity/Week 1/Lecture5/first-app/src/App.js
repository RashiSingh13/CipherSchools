import React from "react";
import Test from "./Test";
const App = () => {
  return (
    <>
      <div>
        <h1>Welcome to React</h1>
        <p>This is a basic React App</p>
        <section>
          <Test key={1} />
          <Test key={2} />
          <Test key={3} />
          <h1>Rashi Singh</h1>
        </section>
      </div>
    </>
  );
};
export default App;
