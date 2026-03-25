import { createReducer } from '@reduxjs/toolkit';
import { changeCity, offersCityList, requireAuthorization, setError, setOffersDataLoadingStatus, toggleFavorite } from './action';
import { AuthorizationStatus, CITIES_LOCATION } from '../const';
import { CityOffer, OffersList } from '../types/offer';
import { AuthorizationStatusType } from '../types/authorization-status';
import { getCity } from '../utils';
import { setUserData } from './slices/user-slice';
import { Review } from '../types/review';
import { fetchReviewsAction } from './api-action';

const defaultCity = getCity('Paris', CITIES_LOCATION);

export type InitialState = {
  city: CityOffer | undefined;
  offers: OffersList[];
  isLoading: boolean;
  authorizationStatus: AuthorizationStatusType;
  error: string | null;
  isOffersDataLoading: boolean;
  email: string | null;
  username: string | null;
  avatarUrl: string | null;
  isPro: boolean;
  reviews: Review[];
  isReviewsLoading: boolean;
}

const initialState : InitialState = {
  city: defaultCity,
  offers: [],
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  email: null,
  username: null,
  avatarUrl: null,
  isPro: false,
  reviews: [],
  isReviewsLoading: false,
};
  
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersCityList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(toggleFavorite, (state, action) => {
      const offer = state.offers.find((o) => o.id === action.payload);
      if (offer) {
        offer.isFavorite = !offer.isFavorite;
      }
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.avatarUrl = action.payload.avatarUrl;
      state.isPro = action.payload.isPro;
    })
    .addCase(fetchReviewsAction.pending, (state) => {
      state.isReviewsLoading = true;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsLoading = false;
    })
    .addCase(fetchReviewsAction.rejected, (state) => {
      state.isReviewsLoading = false;
    });
});

export { reducer };