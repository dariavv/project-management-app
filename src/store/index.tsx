import { FC } from 'react';
import { Provider } from 'react-redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { languageReducer } from './reducers/languageSlice';
import { authReducer } from './reducers/authSlice';

type AppStoreProps = {
  children: React.ReactNode;
};

export const store = configureStore({
  reducer: {
    language: languageReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const AppStore: FC<AppStoreProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
