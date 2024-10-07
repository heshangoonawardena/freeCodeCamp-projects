import React, { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggle = () => {
    setShowModalPopup(!showModalPopup);
  };

  const modalProps = {
    id: "modalDemo",
    header: "Custom Header",
    body: "Custom Body",
    footer: "Footer",
  };

  const onClose = () => {
    setShowModalPopup(false)
    console.log("Modal closed")
  };

  return (
    <div className="model-test-wrapper">
      <button className="modal-toggle" onClick={handleToggle}>
        Open Modal
      </button>
      {showModalPopup && <Modal onClose={onClose} {...modalProps} />}
    </div>
  );
};

export default ModalTest;
