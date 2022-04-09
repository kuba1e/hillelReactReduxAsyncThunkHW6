import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ContactsService from "../../contactsService";

const contacstApi = new ContactsService();

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      return await contacstApi.fetchContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendContact = createAsyncThunk(
  "contacts/sendContact",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await contacstApi.sendContact(data);
      dispatch(setActiveForm());
      dispatch(fetchContacts());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await contacstApi.updateContact(data);
      dispatch(setActiveForm());
      dispatch(fetchContacts());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await contacstApi.deleteContact(id);
      dispatch(fetchContacts());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: "idle",
  error: "",
  contacts: [],
  editedValue: {},
  isFormActive: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setEditedValue: (state, { payload }) => {
      state.editedValue = payload;
    },
    setActiveForm: (state) => {
      state.isFormActive = !state.isFormActive;
      if (!state.isFormActive) {
        state.editedValue = {};
      }
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state) => {
      state.loading = "pending";
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.loading = "idle";
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
    [sendContact.pending]: (state) => {
      state.loading = "pending";
    },
    [sendContact.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
    [updateContact.pending]: (state) => {
      state.loading = "pending";
    },
    [updateContact.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
    [deleteContact.pending]: (state) => {
      state.loading = "pending";
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
  },
});

export const { setEditedValue, setActiveForm } = contactsSlice.actions;
export default contactsSlice.reducer;
