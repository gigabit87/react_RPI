const Setting = {
    rentOffersCount: 312,
} as const;

const AppRoute = {
    Main: '/',
    Login: '/login', 
    Favourites: '/favourites',
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

const AutorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
}

export {Setting};
export {AppRoute};
export {AutorizationStatus};
export {Cities};