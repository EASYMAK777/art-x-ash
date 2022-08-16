import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
// import IndividualIntervalsExample from "./components/Carousel";

import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div className="App">
      <Navbar className="nav" />
      <ImageSlider />
      {/* <IndividualIntervalsExample /> */}
    </div>
  );
}

export default App;
