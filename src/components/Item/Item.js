import React from "react";
import "./Item.css";

export default function Item({
  index,
  contact: { id, name, nickname, phone },
  onDeleteContact,
  onEditContact,
  ...props
}) {
  return (
    <tr>
      <td className="table-data">{index + 1}</td>
      <td className="table-data">{name}</td>
      <td className="table-data">{nickname}</td>
      <td className="table-data">{phone}</td>
      <td className="table-data">
        <div className="btn-container">
          <button className="delete-btn" onClick={() => onDeleteContact(id)}>
            <i className="fa-solid fa-user-minus"></i>
          </button>
          <button className="edit-btn" onClick={() => onEditContact(id)}>
            <i className="fa-solid fa-user-pen"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
