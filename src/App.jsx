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
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator.jsx";
import TabTest from "./components/custom-tabs/TabTest.jsx";
import ModalTest from "./components/custom-modal-popup/ModalTest.jsx";
import ProfileFinder from "./components/github-profile-finder/ProfileFinder.jsx";
import AutoComplete from "./components/Auto-complete/AutoComplete.jsx";
import TicTacToe from "./components/tic-tac-toe/TicTacToe.jsx";

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
      <ThemeChanger />
      <ScrollIndicator />
      <TabTest />
      <ModalTest />
      <ProfileFinder />
      <AutoComplete />
      <TicTacToe />
    </>
  );
};

export default App;
