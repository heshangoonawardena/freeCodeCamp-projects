import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

const ScrollIndicator = () => {
  const url = "https://dummyjson.com/products/?limit=100";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      setData(data);

      data &&
        data.products &&
        data.products.length > 0 &&
        setData(data.products);
    } catch (e) {
      setErrorMsg(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScrollPercentage = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const scrollPercentage = Math.round(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    console.log("🚀", scrollPercentage);

    setScrollPercentage(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  if (loading) return <div className="status">Loading data... please wait</div>
  
  if (errorMsg) return <div className="status">Error occurred: {errorMsg}</div>
  
  return (
    <div className="scroll-indicator-container">
          <div className="top-container">
            <h1>Scroll Indicator</h1>
            <div className="scroll-progress-tracking-container">
              <div
                className="current-progress-bar"
                style={{
                  width: `${scrollPercentage}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="scroll-indicator-products-container">
            {data && data.length > 0
              ? data.map((item) => <p key={item.id}>{item.title}</p>)
              : null}
          </div>
    </div>
  );
};

export default ScrollIndicator;
