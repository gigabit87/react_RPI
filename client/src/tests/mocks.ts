import { faker } from '@faker-js/faker';
import { AuthorizationStatus, CITIES_LOCATION } from '../const';
import type { InitialState } from '../store/reducer';
import type { FullOffer, OffersList } from '../types/offer';
import type { Review } from '../types/review';

export function makeFakeOffer(): OffersList {
  const city = CITIES_LOCATION[Math.floor(Math.random() * CITIES_LOCATION.length)];
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    type: 'apartment',
    price: faker.number.int({ min: 50, max: 500 }),
    city: city,
    location: {
      latitude: city.location.latitude + (Math.random() - 0.5) * 0.02,
      longitude: city.location.longitude + (Math.random() - 0.5) * 0.02,
      zoom: 13,
    },
    isFavorite: faker.datatype.boolean(),
    isPremium: faker.datatype.boolean(),
    rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
    previewImage: faker.image.url(),
  };
}

export function makeFakeFullOffer(): FullOffer {
  const baseOffer = makeFakeOffer();
  return {
    ...baseOffer,
    description: faker.lorem.paragraph(),
    bedrooms: faker.number.int({ min: 1, max: 5 }),
    goods: [faker.commerce.productName(), faker.commerce.productName()],
    host: {
      name: faker.person.fullName(),
      avatarUrl: faker.image.avatar(),
      isPro: faker.datatype.boolean(),
    },
    images: [faker.image.url(), faker.image.url()],
    maxAdults: faker.number.int({ min: 1, max: 10 }),
  };
}

export function makeFakeReview(): Review {
  return {
    id: faker.string.uuid(),
    comment: faker.lorem.sentence(),
    rating: faker.number.int({ min: 1, max: 5 }),
    date: new Date().toISOString(),
    user: {
      name: faker.person.fullName(),
      avatarUrl: faker.image.avatar(),
      isPro: faker.datatype.boolean(),
    },
  };
}

export function makeFakeStore(overrides: Partial<InitialState> = {}): InitialState {
  return {
    city: CITIES_LOCATION[0],
    offers: [],
    isLoading: false,
    authorizationStatus: AuthorizationStatus.NoAuth,
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
    ...overrides,
  };
}