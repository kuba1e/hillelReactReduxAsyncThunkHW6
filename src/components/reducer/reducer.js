export default function reducer(state, action) {
  switch (action.type) {
    case "REQUESTED_TO_DOWNLOAD_CONTACTS":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "DOWNLOADED_CONTACTS_SUCCESSFUL":
      return {
        ...state,
        contacts: [...action.payload],
        loading: false,
        error: false,
      };
    case "FAILED_TO_DOWNLOAD_CONTACTS":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "SENT_CONTACT":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "FAILED_TO_SEND_CONTACT":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETED_CONTACT":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "FAILED_TO_DELETE_CONTACT":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "UPDATED_CONTACT":
      return {
        ...state,
        loading: true,
        error: false,
        editedValue: {},
      };

    case "FAILED_TO_UPDATE_CONTACT":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "SHOWED_FORM":
      return {
        ...state,
        isFormActive: true,
      };

    case "HID_FORM":
      return {
        ...state,
        isFormActive: false,
        editedValue: {},
      };
    case "EDITED_CONTACT":
      return {
        ...state,
        editedValue: action.payload,
      };
    default:
      throw new Error();
  }
}
