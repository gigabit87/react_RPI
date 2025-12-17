import { Review } from "../types/review";

const reviews: Review[] = [
  {
    id: '1',
    date: '2019-04-24',
    user: {
      name: 'Max',
      avatarUrl: 'avatar-max.jpg',
      isPro: false,
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4,
  },
  {
    id: '2',
    date: '2020-03-15',
    user: {
      name: 'Angelina',
      avatarUrl: 'avatar-angelina.jpg',
      isPro: true,
    },
    comment: 'Beautiful place! The location is perfect and the apartment is very clean and comfortable.',
    rating: 5,
  },
];

export { reviews };

