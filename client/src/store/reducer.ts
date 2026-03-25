import { createReducer } from '@reduxjs/toolkit';
import { changeCity, offersCityList, requireAuthorization, setError, setOffersDataLoadingStatus, toggleFavorite } from './action';
import { AuthorizationStatus, CITIES_LOCATION } from '../const';
import { CityOffer, OffersList, FullOffer } from '../types/offer';
import { AuthorizationStatusType } from '../types/authorization-status';
import { getCity } from '../utils';
import { setUserData } from './slices/user-slice';
import { Review } from '../types/review';
import { fetchReviewsAction, fetchOfferAction, fetchFavoriteOffersAction, toggleFavoriteAction } from './api-action';

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
  currentOffer: FullOffer | null;
  isOfferLoading: boolean;
  favoriteOffers: FullOffer[];
  isFavoriteOffersLoading: boolean;
}

const initialState: InitialState = {
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
  currentOffer: null,
  isOfferLoading: false,
  favoriteOffers: [],
  isFavoriteOffersLoading: false,
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
      if (state.currentOffer && state.currentOffer.id === action.payload) {
        state.currentOffer.isFavorite = !state.currentOffer.isFavorite;
      }
    })
    .addCase(toggleFavoriteAction.fulfilled, (state, action) => {
      const { offerId, isFavorite } = action.payload;
      
      const offer = state.offers.find((o) => o.id === offerId);
      if (offer) {
        offer.isFavorite = isFavorite;
      }
      
      if (state.currentOffer && state.currentOffer.id === offerId) {
        state.currentOffer.isFavorite = isFavorite;
      }
      
      if (!isFavorite) {
        const index = state.favoriteOffers.findIndex((o) => o.id === offerId);
        if (index !== -1) {
          state.favoriteOffers.splice(index, 1);
        }
      } else {
        const fullOffer = state.currentOffer && state.currentOffer.id === offerId 
          ? state.currentOffer 
          : state.offers.find((o) => o.id === offerId);
        
        if (fullOffer && !state.favoriteOffers.find((o) => o.id === offerId)) {
          state.favoriteOffers.push(fullOffer as FullOffer);
        }
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
    })
    .addCase(fetchOfferAction.pending, (state) => {
      state.isOfferLoading = true;
      state.currentOffer = null;
    })
    .addCase(fetchOfferAction.fulfilled, (state, action) => {
      state.currentOffer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(fetchOfferAction.rejected, (state) => {
      state.isOfferLoading = false;
      state.currentOffer = null;
    })
    .addCase(fetchFavoriteOffersAction.pending, (state) => {
      state.isFavoriteOffersLoading = true;
    })
    .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
      state.favoriteOffers = action.payload;
      state.isFavoriteOffersLoading = false;
    })
    .addCase(fetchFavoriteOffersAction.rejected, (state) => {
      state.isFavoriteOffersLoading = false;
      state.favoriteOffers = [];
    });
});

export { reducer };