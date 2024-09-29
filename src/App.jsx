import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";

const App = () => {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider />
    </>
  );
};

export default App;
