import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMore from "./components/LoadMore/LoadMore";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";

const App = () => {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider />
      <LoadMore />
      <ThemeChanger />
    </>
  );
};

export default App;
