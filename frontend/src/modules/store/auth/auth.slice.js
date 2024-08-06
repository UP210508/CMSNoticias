import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      status: 'unauthenticated',
      user: {}
    },
    reducers: {

      login: ( state, { payload } ) => {
        state.status = 'authenticated';
        state.user = payload;
      },

      logout: ( state, _ ) => {
        state.status = 'unauthenticated';
        state.user = {}
      }

    }
})

export const {
  login,
  logout,
} = authSlice.actions;
