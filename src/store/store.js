import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../features/contacts";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
