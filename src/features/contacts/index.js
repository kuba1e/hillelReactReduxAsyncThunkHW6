import { setActiveForm, setEditedValue } from "./contactsSlice";
import contactsReducer from './contactsSlice'
import {
  fetchContacts,
  sendContact,
  updateContact,
  deleteContact,
} from "./contactsSlice";
export { fetchContacts, sendContact, updateContact, deleteContact };
export { setActiveForm, setEditedValue };
export default contactsReducer
