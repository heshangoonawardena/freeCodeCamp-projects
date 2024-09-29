import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import fetchedData from "./data.js";
import "./ImageSlider.css";

const ImageSlider = () => {
  const url = "";

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    try {
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();

      data && setImages(data) & setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    // url !== "" && fetchImages();
    setImages(fetchedData);
  }, []);

  console.log(images);

  if (loading) return <div>Loading data please wait</div>;

  if (errorMsg !== null) return <div>Error occurred! {errorMsg}</div>;

  return (
    <div className="container-image-slider">
      <div className="image-slider">
        <FaArrowLeft className="arrow arrow-left" onClick={handlePrevious} />
        {images && images.length > 0
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                src={imageItem.urls.regular}
                alt={imageItem.alt_description}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}
        <FaArrowRight className="arrow arrow-right" onClick={handleNext} />
        <span className="circle-indicators">
          {images && images.length > 0
            ? images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
