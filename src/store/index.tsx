import { FC } from 'react';
import { Provider } from 'react-redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from './reducers/authSlice';
import { usersReducer } from './reducers/usersSlice';
import { boardsReducer } from './reducers/boardsSlice';
import { columnsReducer } from './reducers/columnsSlice';

type AppStoreProps = {
  children: React.ReactNode;
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    boards: boardsReducer,
    columns: columnsReducer,
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
