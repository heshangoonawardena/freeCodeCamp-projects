import React, { useState } from "react";
import "./Accordion.css";
import data from "./data.js";

const Accordion = () => {
  const [selected, setSelected] = useState([]);
  const [enableMultiSelect, setEnableMultiSelect] = useState(true);

  const handleSingleSelect = (id) => {
    setSelected(selected.includes(id) ? [] : [id]);
  };

  const handleMultiSelect = (id) => {
    setSelected(
      selected.includes(id)
        ? selected.filter((value) => value !== id)
        : [...selected, id]
    );
  };
  console.log(selected);

  return (
    <div className="wrapper">
      <button
        className="toggle"
        onClick={() => setEnableMultiSelect(!enableMultiSelect)}
      >
        multi select {enableMultiSelect ? "on" : "off"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          <div>
            {data.map((dataItem) => (
              <div
                onClick={
                  enableMultiSelect
                    ? () => handleMultiSelect(dataItem.id)
                    : () => handleSingleSelect(dataItem.id)
                }
                className="item"
                key={dataItem.id}
              >
                <div className="title">
                  <h4>{dataItem.question}</h4>
                  <span>+</span>
                </div>
                <div className="answer">
                  {selected.includes(dataItem.id) && <p>{dataItem.answer}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div> no data available ! </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
