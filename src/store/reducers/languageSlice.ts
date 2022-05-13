import { createSlice } from '@reduxjs/toolkit';

interface LanguageState {
  language: 'en' | 'ru';
}

const initialState: LanguageState = {
  language: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

const { reducer, actions } = languageSlice;

export const { setLanguage } = actions;
export const languageReducer = reducer;
