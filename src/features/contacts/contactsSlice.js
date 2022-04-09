import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://contacts12.herokuapp.com/users");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const contacts = await response.json();
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendContact = createAsyncThunk(
  "contacts/sendContact",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch("https://contacts12.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
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
      const { id } = data;
      delete data.id;
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
      const response = await fetch(
        `https://contacts12.herokuapp.com/users/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }
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
