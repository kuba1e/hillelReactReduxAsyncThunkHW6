import React, { useState } from "react";
import "./ItemAddForm.css";

export default function ItemAddForm({
  onAddContact,
  onUpdateContact,
  onHideForm,
  editedValue,
  ...props
}) {
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
      ? onUpdateContact
      : onAddContact;
    submitData(formData);
    onHideForm();
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
          <button className="btn cancel-btn" type="reset" onClick={onHideForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
