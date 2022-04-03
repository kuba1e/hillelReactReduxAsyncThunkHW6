import React from "react";
import Item from "../Item/";
import "./ItemsTable.css";

export default function ItemsTable({
  contacts,
  onDeleteContact,
  onEditContact,
  ...props
}) {
  return (
    <div className="table-container">
      <table className="table">
        <caption className="table-title">My contacts</caption>
        <thead className="table-header">
          <tr>
            <th className="table-header-item">#</th>
            <th className="table-header-item">First Name</th>
            <th className="table-header-item">Second Name</th>
            <th className="table-header-item">Phone Number</th>
            <th className="table-header-item">Manage your contacts</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {contacts.map((contact, index) => (
            <Item
              key={contact.id}
              contact={contact}
              index={index}
              onDeleteContact={onDeleteContact}
              onEditContact={onEditContact}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
