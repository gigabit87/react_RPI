import { configureStore } from '@reduxjs/toolkit';
import { offersReducer } from './slices/offers-slice';
import { userReducer } from './slices/user-slice';

export const store = configureStore({
  reducer: {
    offers: offersReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

