import { Review } from "../types/review";

const reviews: Review[] = [
  {
    id: '1',
    date: '2019-04-24',
    user: {
      name: 'Max',
      avatarUrl: 'avatar/ava1.jpg',
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
      avatarUrl: 'avatar/ava2.jpg',
      isPro: true,
    },
    comment: 'Beautiful place! The location is perfect and the apartment is very clean and comfortable.',
    rating: 5,
  },
  {
    id: '3',
    date: '2021-07-10',
    user: {
      name: 'Alice',
      avatarUrl: 'avatar/ava3.jpg',
      isPro: false,
    },
    comment: 'Nice cozy apartment, close to public transport and cafes. Would definitely stay here again.',
    rating: 4,
  },
];

export { reviews };

