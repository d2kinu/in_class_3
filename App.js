import React from "react";
import Counter from "./Counter"; // Import the Counter component
import "./Counter.css"; // Import the CSS for the Counter component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter /> {/* This line will render the Counter component */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
