import React, { Fragment, useEffect } from "react";
import "./App.css";
import ItemsTable from "../ItemsTable";
import FormControlBtn from "./FormControlBtn";
import ItemAddForm from "../ItemAddForm";
import Loader from "../Loader";
import ErrorIndicator from "../ErrorIndicator";
import { fetchContacts } from "../../features/contacts";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const { isFormActive, loading, error } = useSelector(
    ({ contacts: { isFormActive, loading, error } }) => ({
      isFormActive,
      loading,
      error,
    })
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const itemForm = isFormActive ? <ItemAddForm /> : null;

  const formConctrolBtn = !isFormActive ? <FormControlBtn /> : null;

  const errorInd =
    loading === "failed" && error ? <ErrorIndicator error={error} /> : null;
  const loader = loading === "pending" && !error ? <Loader /> : null;
  const table =
    loading === "idle" && !error ? (
      <>
        <ItemsTable />
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
