import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkApi) => {
        try {
            const response = await axios.post('/users/signup', user);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
    try {
        const response = await axios.post('/users/login', user);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkApi.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
