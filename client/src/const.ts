const Setting = {
    rentOffersCount: 312,
} as const;

export const AppRoute = {
    Main: '/',
    Login: '/login', 
    Favourites: '/favorites',
    Offer: '/offer',
} as const;

const Cities = [ 
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

import { CityOffer } from './types/offer';

const CITIES_LOCATION: CityOffer[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 13
    }
  },
];

export const SortOffersType = {
  Popular: 'Popular',
  PriceToHigh: 'Price: low to high',
  PriceToLow: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;

export const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
}

export const APIRoute = {
  Offers : '/offers',
  Login : '/login',
  Logout : '/logout',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export {Setting};
export {Cities};
export {CITIES_LOCATION};