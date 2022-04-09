import React from "react";
import "./Item.css";
import { useDispatch } from "react-redux";
import {
  setEditedValue,
  deleteContact,
  setActiveForm,
} from "../../features/contacts";

export default function Item({ contact, index, props }) {
  const dispatch = useDispatch();
  const { id, name, nickname, phone } = contact;
  return (
    <tr>
      <td className="table-data">{index + 1}</td>
      <td className="table-data">{name}</td>
      <td className="table-data">{nickname}</td>
      <td className="table-data">{phone}</td>
      <td className="table-data">
        <div className="btn-container">
          <button
            className="delete-btn"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            <i className="fa-solid fa-user-minus"></i>
          </button>
          <button
            className="edit-btn"
            onClick={() => {
              dispatch(setEditedValue(contact));
              dispatch(setActiveForm());
            }}
          >
            <i className="fa-solid fa-user-pen"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
