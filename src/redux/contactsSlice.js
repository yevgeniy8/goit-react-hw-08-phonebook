import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logout } from './auth/authOperations';

const initialState = {
    contactsList: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
};

const handleFetchContactsFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.contactsList = action.payload;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handleAddContactFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.contactsList = [...state.contactsList, action.payload];
};

const handleDeleteContactFulfilled = (state, action) => {
    return {
        ...state,
        isLoading: false,
        error: null,
        contactsList: state.contactsList.filter(
            item => item.id !== action.payload.id
        ),
    };
};

const handleLogoutFulfilled = state => {
    state.items = [];
    state.error = null;
    state.isLoading = false;
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, handleAddContactFulfilled)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(logout.fulfilled, handleLogoutFulfilled);
    },
});
