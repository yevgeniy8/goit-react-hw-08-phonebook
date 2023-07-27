import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactsSlice } from './contactsSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
});
