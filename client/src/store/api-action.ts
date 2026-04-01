import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { OffersList, FullOffer } from '../types/offer.js';
import {offersCityList, requireAuthorization, setError, setOffersDataLoadingStatus} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {AuthData, UserData} from '../types/user-data';
import { setUserData } from './slices/user-slice';
import { Review } from '../types/review.js';

const fetchOffersAction = createAsyncThunk<void, undefined, {
 dispatch: AppDispatch;
 state: State;
 extra: AxiosInstance;
}>(
 'data/fetchOffers',
 async (_arg, {dispatch, extra: api}) => {
   dispatch(setOffersDataLoadingStatus(true));
   try {
     const {data} = await api.get<OffersList[]>(APIRoute.Offers);
     dispatch(offersCityList(data));
   } catch (error) {
     dispatch(setError('Failed to load offers'));
   } finally {
     dispatch(setOffersDataLoadingStatus(false));
   }
 },
);

const checkAuthAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch;
   state: State;
   extra: AxiosInstance;
 }>(
   'user/checkAuth',
   async (_arg, {dispatch, extra: api}) => {
     try {
       const response = await api.get(APIRoute.Login);
       if (response.data) {
         dispatch(setUserData({
           email: response.data.email,
           username: response.data.username,
           avatarUrl: response.data.avatarUrl,
           isPro: response.data.isPro
         }));
       }
       dispatch(requireAuthorization(AuthorizationStatus.Auth));
     } catch (error: any) {
       if (error.response?.status === 401) {
         dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
       } else {
         dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
       }
     }
   },
 );

const loginAction = createAsyncThunk<
 UserData,       
 AuthData,       
 { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
 'user/login',
 async ({ email, password }, { dispatch, extra: api, rejectWithValue }) => {
   try {
     const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
     
     if (data.token) {
       saveToken(data.token);
     }
     
     dispatch(setUserData({
       email: data.email,
       username: data.username,
       avatarUrl: data.avatarUrl,
       isPro: data.isPro || false
     }));
     
     dispatch(requireAuthorization(AuthorizationStatus.Auth));
     return data;
   } catch (err: any) {
     dropToken();
     dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
     const errorMessage = err.response?.data?.message || 'Login failed';
     dispatch(setError(errorMessage));
     return rejectWithValue(errorMessage);
   }
 }
);

const logoutAction = createAsyncThunk<void, undefined, {
 dispatch: AppDispatch;
 state: State;
 extra: AxiosInstance;
}>(
 'user/logout',
 async (_arg, {dispatch, extra: api}) => {
   try {
     await api.delete(APIRoute.Logout);
   } catch (error) {
   } finally {
     dropToken();
     dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
   }
 },
);

export const clearErrorAction = createAsyncThunk(
   'clearError',
   async (_arg, {dispatch}) => {
     setTimeout(
       () => dispatch(setError(null)),
       TIMEOUT_SHOW_ERROR,
     );
   },
 );

export const fetchReviewsAction = createAsyncThunk<
  Review[],
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'data/fetchReviews',
  async (offerId, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<Review[]>(`/comments/${offerId}`);
      return data;
    } catch (error) {
      return rejectWithValue('Failed to load reviews');
    }
  }
);

export const fetchOfferAction = createAsyncThunk<
  FullOffer,
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'data/fetchOffer',
  async (offerId, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<FullOffer>(`/offers/${offerId}`);
      return data;
    } catch (error) {
      return rejectWithValue('Failed to load offer');
    }
  }
);

export const toggleFavoriteAction = createAsyncThunk<
  { offerId: string; isFavorite: boolean },
  { offerId: string; status: number },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'data/toggleFavorite',
  async ({ offerId, status }, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const token = localStorage.getItem('rent-service-token');
      await api.post(
        `/favorite/${offerId}/${status}`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      return { offerId, isFavorite: status === 1 };
    } catch (error) {
      return rejectWithValue('Failed to toggle favorite');
    }
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<
  FullOffer[],
  void,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'data/fetchFavoriteOffers',
  async (_arg, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<FullOffer[]>('/favorite');
      return data;
    } catch (error) {
      return rejectWithValue('Failed to load favorite offers');
    }
  }
);

export {fetchOffersAction, checkAuthAction, loginAction, logoutAction};