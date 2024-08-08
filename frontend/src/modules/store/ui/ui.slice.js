import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
      isLoading: false,
      alert: {
        isOpen: false,
        content: '',
        type: ''
      },
    },
    reducers: {

      setIsLoading: ( state, { payload } ) => {
        state.isLoading = payload;
      },

      setAlert: ( state, { payload } ) => {
        state.alert = payload;
      },

      resetUI: ( state ) => {
        state.isLoading = false;
        state.modal = {
          isOpen: false,
          content: '',
          type: '',
        }
      }

    }
})

export const {
  setIsLoading,
  setAlert,
  resetUI,
} = uiSlice.actions;
