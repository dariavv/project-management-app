import { FC } from 'react';
import { Provider } from 'react-redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { exampleReducer } from './reducers/exampleSlice';

type AppStoreProps = {
  children: React.ReactNode;
};

export const store = configureStore({
  reducer: {
    example: exampleReducer,
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
