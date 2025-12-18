import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { userReducer } from './slices/user-slice';
import { CityOffer, OffersList } from '../types/offer';

export const store = configureStore({
  reducer: {
    city: (state: CityOffer | undefined, action) => {
      const result = reducer(state ? { city: state, offers: [] } : undefined, action);
      return result.city;
    },
    offers: (state: OffersList[] | undefined, action) => {
      const result = reducer(state ? { city: undefined, offers: state } : undefined, action);
      return result.offers;
    },
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

