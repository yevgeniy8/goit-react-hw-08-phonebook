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
            console.log(response);
            return response.data;
        } catch (error) {
            thunkApi.rejectWithValue(error);
        }
    }
);
