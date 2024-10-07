import React, { useEffect } from "react";
import "./Modal.css";

const Modal = (props) => {
  const { id, header, body, footer, onClose } = props;

  const handleBackgroundClick = (e) => {
    e.target === e.currentTarget && onClose();
  };

  const handleKeyDown = (e) => {
    e.key === "Escape" && onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id={id || "modal"} className="modal" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <div className="modal-header">
          <span onClick={onClose} className="close-modal-icon">
            X
          </span>
          <h2>{header ? header : "header"}</h2>
        </div>
        <div className="modal-body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is the modal body</p>
            </div>
          )}
        </div>
        <div className="modal-footer">
          {footer ? footer : <h2> This is the modal footer </h2>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
