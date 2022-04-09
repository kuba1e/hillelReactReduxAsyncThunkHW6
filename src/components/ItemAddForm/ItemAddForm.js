import React, { useState } from "react";
import "./ItemAddForm.css";
import { useDispatch, useSelector } from "react-redux";
import {
  sendContact,
  setActiveForm,
  updateContact,
} from "../../features/contacts";

export default function ItemAddForm(props) {
  const editedValue = useSelector(
    ({ contacts: { editedValue } }) => editedValue
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(() => {
    const initialState = Object.keys(editedValue).length
      ? editedValue
      : { name: "", nickname: "", phone: "" };
    return initialState;
  });

  const onInputChange = ({ target }) => {
    setFormData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const submitData = Object.keys(editedValue).length
      ? updateContact
      : sendContact;
    dispatch(submitData(formData));
  };

  const onResetForm = (event) => {
    setFormData({
      name: "",
      nickname: "",
      phone: "",
    });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={onSubmitForm} onReset={onResetForm}>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onInputChange}
        />
        <label className="label" htmlFor="nickname">
          Nickname
        </label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          value={formData.nickname}
          onChange={onInputChange}
        />
        <label className="label" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={onInputChange}
        />
        <div className="btn-group">
          <button className="btn add-btn" type="submit">
            Save
          </button>
          <button
            className="btn cancel-btn"
            type="reset"
            onClick={() => {
              dispatch(setActiveForm());
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
