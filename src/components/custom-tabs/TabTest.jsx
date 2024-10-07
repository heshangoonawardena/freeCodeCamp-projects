import React from "react";
import Tabs from "./tabs";

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>This is content for Tab 3</div>,
    },
  ];

  const handleChange = (index) => {
    console.log(`Tab changed to ${index + 1}`);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
