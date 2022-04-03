import React, { Fragment, useEffect, useReducer } from "react";
import "./App.css";
import reducer from "../reducer";
import { fetchData, sendData, deleteData, updateData } from "../asyncFunc";
import { showedForm, hidForm, editedContact } from "../actions";
import ItemsTable from "../ItemsTable";
import FormControlBtn from "./FormControlBtn";
import ItemAddForm from "../ItemAddForm";
import Loader from "../Loader";
import ErrorIndicator from "../ErrorIndicator";

const initialState = {
  loading: false,
  error: false,
  contacts: [],
  editedValue: {},
  isFormActive: false,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetchData(dispatch);
  }, []);

  const onAddContact = async ({ name, nickname, phone }) => {
    await sendData(dispatch, name, nickname, phone);
    await fetchData(dispatch);
  };

  const onDeleteContact = async (id) => {
    await deleteData(dispatch, id);
    await fetchData(dispatch);
  };

  const onUpdateContact = async (data) => {
    await updateData(dispatch, data);
    await fetchData(dispatch);
  };

  const onShowForm = () => dispatch(showedForm());
  const onHideForm = () => dispatch(hidForm());
  const onEditContact = (id) => {
    const editedContactData = state.contacts.find(
      (contact) => contact.id === id
    );
    dispatch(editedContact(editedContactData));
    dispatch(showedForm());
  };

  const { loading, error, isFormActive, editedValue, contacts } = state;

  const itemForm = isFormActive ? (
    <ItemAddForm
      onAddContact={onAddContact}
      onUpdateContact={onUpdateContact}
      onHideForm={onHideForm}
      editedValue={editedValue}
    />
  ) : null;

  const formConctrolBtn = !isFormActive ? (
    <FormControlBtn onShowForm={onShowForm} />
  ) : null;

  const errorInd = !loading && error ? <ErrorIndicator error={error} /> : null;
  const loader = loading && !error ? <Loader /> : null;
  const table =
    !loading && !error ? (
      <>
        <ItemsTable
          contacts={contacts}
          onDeleteContact={onDeleteContact}
          onEditContact={onEditContact}
        />
        {formConctrolBtn}
        {itemForm}
      </>
    ) : null;

  return (
    <Fragment>
      {loader}
      {errorInd}
      {table}
    </Fragment>
  );
}
