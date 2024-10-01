import React from "react";
import "./App.css";
import menus from "./components/TreeMenu/data.js";
import Accordion from "./components/Accordion/Accordion";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMore from "./components/LoadMore/LoadMore";
import TreeMenu from "./components/TreeMenu/TreeMenu";
import QrCodeGenerator from "./components/QrCodeGenerator/QrCodeGenerator";

const App = () => {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider />
      <LoadMore />
      <TreeMenu menus={menus} />
      <QrCodeGenerator />
    </>
  );
};

export default App;
