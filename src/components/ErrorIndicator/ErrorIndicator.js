import React from "react";
import "./ErrorIndicator.css";

export default function ErrorIndicator({ error, ...props }) {
  return (
    <div className="error-container">
      <p>Oooops! Something went wrong! Error: {error}</p>
    </div>
  );
}
