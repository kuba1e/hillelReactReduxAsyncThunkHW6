const requestedContacts = () => ({ type: "REQUESTED_TO_DOWNLOAD_CONTACTS" });
const downloadedContacts = (data) => ({
  type: "DOWNLOADED_CONTACTS_SUCCESSFUL",
  payload: data,
});
const failedToDownloadContacts = (error) => ({
  type: "FAILED_TO_DOWNLOAD_CONTACTS",
  payload: error,
});

const sentContact = () => ({ type: "SENT_CONTACT" });
const failedToSendContact = (error) => ({
  type: "FAILED_TO_SEND_CONTACT",
  payload: error,
});

const deletedContact = () => ({ type: "DELETED_CONTACT" });
const failedToDeleteContact = (error) => ({ type: "FAILED_TO_DELETE_CONTACT" });

const updatedContact = () => ({ type: "UPDATED_CONTACT" });
const failedToUpdateContact = (error) => ({ type: "FAILED_TO_UPDATE_CONTACT" });

const showedForm = () => ({ type: "SHOWED_FORM" });
const hidForm = () => ({ type: "HID_FORM" });

const editedContact = (data) => ({ type: "EDITED_CONTACT", payload: data });

export {
  requestedContacts,
  downloadedContacts,
  failedToDownloadContacts,
  sentContact,
  failedToSendContact,
  deletedContact,
  failedToDeleteContact,
  showedForm,
  hidForm,
  editedContact,
  updatedContact,
  failedToUpdateContact,
};
