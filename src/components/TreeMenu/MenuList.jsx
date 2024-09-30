import React from "react";
import MenuItem from "./MenuItem";
import "./styles.css"

const MenuList = (props) => {
  const { list } = props;
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
