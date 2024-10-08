import React from "react";

const suggestions = ({ handleClick, data }) => {
  return (
    <ul className="auto-complete-users-list">
      {data?.length
        ? data.map((user, index) => (
            <li
              className="auto-complete-user"
              key={index}
              onClick={handleClick}
            >
              {user}
            </li>
          ))
        : <li className="auto-complete-users-list"> No Such User!</li>}
    </ul>
  );
};

export default suggestions;
