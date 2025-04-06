import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType } from '../types/auth.type';
import { authApi } from '@/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

interface AuthState {
  email: string;
  password: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  email: '',
  password: '',
  isAuthenticated: false
}

export const login = createAsyncThunk(
  `${AuthType.LOGIN}/login`,
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await authApi.login(data.email, data.password);
      // Save token to AsyncStorage
      if (__DEV__) {
        console.log('[Login Response]', response);
      }
      await AsyncStorage.setItem('token', response.data.token);
      // Navigate to home after successful login
      router.replace('/(home)/home');
      return response.data;
    } catch (error) {
      if (__DEV__) {
        console.error('[Login Error]', error);
      }
      return rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: AuthType.LOGIN,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        if (__DEV__) {
          console.log('[Login] Pending');
        }
        state.isAuthenticated = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (__DEV__) {
          console.log('[Login] Success', action.payload);
        }
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        if (__DEV__) {
          console.error('[Login] Failed', action.error);
        }
        state.isAuthenticated = false;
      });
  }
});

export default authSlice.reducer;
