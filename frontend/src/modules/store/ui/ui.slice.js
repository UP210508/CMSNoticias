import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
      isLoading: false,
      modal: {
        isOpen: false,
        content: '',
      },
    },
    reducers: {

      setIsLoading: ( state, { payload } ) => {
        state.isLoading = payload;
      },

      setModal: ( state, { payload } ) => {
        state.modal = payload;
      },

      resetUI: ( state ) => {
        state.isLoading = false;
        state.modal = {
          isOpen: false,
          content: '',
        }
      }

    }
})

export const {
  setIsLoading,
  setModal,
  resetUI,
} = uiSlice.actions;
