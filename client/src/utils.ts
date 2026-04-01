import { CityOffer, OffersList } from './types/offer';
import { SortOffer } from './types/sort';

export function getCity(cityName: string, cities: CityOffer[]): CityOffer | undefined {
  return cities.find((city) => city.name === cityName);
}

export function getOffersByCity(cityName: string | undefined, offers: OffersList[]): OffersList[] {
  if (!cityName) {
    return [];
  }
  return offers.filter((offer) => offer.city.name === cityName);
}

export function sortOffersByType(offers: OffersList[], type: SortOffer): OffersList[] {
  switch (type) {
    case 'PriceToHigh':
      return [...offers].sort((a, b) => a.price - b.price);
    case 'PriceToLow':
      return [...offers].sort((a, b) => b.price - a.price);
    case 'TopRated':
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}