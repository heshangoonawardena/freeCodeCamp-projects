import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";

const App = () => {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating />
    </>
  );
};

export default App;
