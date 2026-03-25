import { createAction } from '@reduxjs/toolkit';
import { CityOffer, OffersList } from '../types/offer';
import { AuthorizationStatusType } from '../types/authorization-status';

const changeCity = createAction('offers/changeCity', (city: CityOffer) => ({
  payload: city,
}));

const offersCityList = createAction('offers/offersCityList', (offers: OffersList[]) => ({
  payload: offers,
}));

const toggleFavorite = createAction('offers/toggleFavorite', (offerId: string) => ({
  payload: offerId,
}));

const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');

const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

const setError = createAction('setError', (error: string | null) => ({
  payload: error
}));

export { changeCity, offersCityList, toggleFavorite, requireAuthorization, setError, setOffersDataLoadingStatus };

