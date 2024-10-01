import React, { useState } from "react";
import QRCode from "react-qr-code"
import "./styles.css"

const QrCodeGenerator = () => {
  
  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')

  const handleGenerateQrCode = () => {
    setQrCode(input)
    setInput('')
  }

  return (
    <div className="qr-code-generator-container">
      <h1>Qr Code Generator</h1>
      <div className="qr-code-input">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div className="qr-code-container">
        <QRCode id="qr-code-value" value={qrCode} size={350} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
