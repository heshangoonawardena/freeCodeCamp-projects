import React from "react";
import MenuList from "./MenuList.jsx";
import "./styles.css"

const TreeMenu = (props) => {
  const { menus } = props;
  return (
    <div className="tree-menu-container">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeMenu;
