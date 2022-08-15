import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import IndividualIntervalsExample from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar className="nav" />

      <IndividualIntervalsExample />
    </div>
  );
}

export default App;
