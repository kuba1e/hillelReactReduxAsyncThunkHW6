import React from "react";
import { useDispatch } from "react-redux";
import { setActiveForm } from "../../../features/contacts";

export default function FormControlBtn(props) {
  const dispatch = useDispatch();

  return (
    <div className="form-btn-container">
      <button
        className="form-control-btn"
        onClick={() => dispatch(setActiveForm())}
      >
        Add Contact
      </button>
    </div>
  );
}
