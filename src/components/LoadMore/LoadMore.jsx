import React, { useState, useEffect } from "react";
import "./LoadMore.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      result &&
        result.products &&
        result.products.length &&
        setProducts((prevProducts) => [...prevProducts, ...result.products]);

      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    products && products.length === 40 && setDisableButton(true);
  }, [products]);

  loading && <div>Loading data ! please wait</div>;

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount((c) => c + 1)}>
          Load More
        </button>
        {disableButton && (
          <div>
            <p>no more products to load !</p>
            <p>You have reached the {products.length} items limit</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadMore;
