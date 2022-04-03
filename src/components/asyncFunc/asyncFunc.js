import {
  requestedContacts,
  downloadedContacts,
  failedToDownloadContacts,
  sentContact,
  failedToSendContact,
  deletedContact,
  failedToDeleteContact,
  updatedContact,
  failedToUpdateContact,
} from "../actions";

async function fetchData(dispatch) {
  try {
    dispatch(requestedContacts());
    const response = await fetch("https://contacts12.herokuapp.com/users");
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const contacts = await response.json();
    dispatch(downloadedContacts(contacts.data));
  } catch (error) {
    dispatch(failedToDownloadContacts(error.message));
  }
}

async function sendData(dispatch, name, nickname, phone) {
  try {
    const newContact = {
      name,
      nickname,
      phone,
    };

    dispatch(sentContact());
    const response = await fetch("https://contacts12.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(newContact),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    dispatch(failedToSendContact(error.message));
  }
}

async function updateData(dispatch, data) {
  try {
    const {id}= data
    delete data.id
    dispatch(updatedContact());
    const response = await fetch(
      `https://contacts12.herokuapp.com/users/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    dispatch(failedToUpdateContact(error.message));
  }
}

async function deleteData(dispatch, id) {
  try {
    dispatch(deletedContact());
    const response = await fetch(
      `https://contacts12.herokuapp.com/users/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    dispatch(failedToDeleteContact(error.message));
  }
}

export { fetchData, sendData, deleteData, updateData };
