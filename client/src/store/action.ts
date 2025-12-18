import { createAction } from '@reduxjs/toolkit';
import { CityOffer, OffersList } from '../types/offer';

const changeCity = createAction('offers/changeCity', (city: CityOffer) => ({
  payload: city,
}));

const offersCityList = createAction('offers/offersCityList', (offers: OffersList[]) => ({
  payload: offers,
}));

const toggleFavorite = createAction('offers/toggleFavorite', (offerId: string) => ({
  payload: offerId,
}));

export { changeCity, offersCityList, toggleFavorite };

