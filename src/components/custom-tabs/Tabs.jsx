import React from "react";
import { useState } from "react";
import "./Tabs.css"

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (index) => {
    setCurrentTabIndex(index);
    onChange(index);
  };

  return (
    <div className="tabs-wrapper">
      <div className="tabs-heading">
        {tabsContent.map((tabItem, index) => (
          <div className={ `tab-item ${currentTabIndex === index ? 'tabActive' : ''}`} onClick={() => handleOnClick(index)} key={tabItem.label}>
            <span className="tabs-label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
