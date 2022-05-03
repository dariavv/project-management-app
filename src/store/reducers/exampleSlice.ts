import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
  language: 'en' | 'ru';
}

const initialState: ExampleState = {
  language: 'en',
};

const exampleSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'ru'>) => {
      state.language = action.payload;
    },
  },
});

const { reducer, actions } = exampleSlice;

export const { setLanguage } = actions;
export const exampleReducer = reducer;
