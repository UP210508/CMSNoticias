import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './ui/ui.slice';
import { authSlice } from './auth/auth.slice';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer
  }
})