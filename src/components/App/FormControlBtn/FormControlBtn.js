import React from "react";

export default function FormControlBtn({ onShowForm, ...props }) {
  return (
    <div className="form-btn-container">
      <button className="form-control-btn" onClick={onShowForm}>
        Add Contact
      </button>
    </div>
  );
}
