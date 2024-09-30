import React, { useState } from "react";
import MenuList from "./MenuList";
import "./styles.css"
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const MenuItem = (props) => {
  const { item } = props;

  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (currentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  };

  console.log(displayCurrentChildren);

  return (
    <span>
      <li className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span
            className="toggle-icon"
            onClick={() => handleToggleChildren(item.label)}
          >
            {displayCurrentChildren[item.label] ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </span>
        ) : null}
      </li>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </span>
  );
};

export default MenuItem;
