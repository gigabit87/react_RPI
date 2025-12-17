import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
  {
    'id': 'bbb88a8e-3f92-466f-9a88-cb6db5638c2b',
    'title': 'wood and stone place',
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for family',
    'type': 'apartment',
    'price': 370,
    'images': [
      '70s.jpg',
      '17.jpg',
      '16.jpg',
      '15.jpg',
      '12.jpg',
      '7.jpg'
    ],
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610808080884,
      'longitude': 2.342499,
      'zoom': 18
    },
    'goods': [
      'Heating',
      'Wi-Fi',
      'Fridge',
      'Laptop friendly workspace',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Dishwasher',
      'Kitchen',
      'Washing machine',
      'Breakfast',
      'Coffee machine'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.9,
    'bedrooms': 2,
    'maxAdults': 3
  },



  
  {
    'id': 'ccc88a8e-3f92-466f-9a88-cb6db5638c3c',
    'title': 'Modern Loft in City Center',
    'description': 'Beautiful modern loft with great view of the cathedral. Perfect for couples or solo travelers.',
    'type': 'apartment',
    'price': 290,
    'images': [
      'cologne1.jpg',
      'cologne2.jpg',
      'cologne3.jpg'
    ],
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.937531,
        'longitude': 6.9602786,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.941531,
      'longitude': 6.9582786,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'TV',
      'Iron',
      'Hair dryer'
    ],
    'host': {
      'isPro': false,
      'name': 'Thomas',
      'avatarUrl': 'avatar-thomas.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
    'bedrooms': 1,
    'maxAdults': 2
  },



  {
    'id': 'ddd88a8e-3f92-466f-9a88-cb6db5638c4d',
    'title': 'Charming Townhouse',
    'description': 'Cozy townhouse in the heart of Brussels, close to Grand Place and all major attractions.',
    'type': 'house',
    'price': 420,
    'images': [
      'brussels1.jpg',
      'brussels2.jpg',
      'brussels3.jpg',
      'brussels4.jpg'
    ],
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.8503463,
        'longitude': 4.3517211,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.8483463,
      'longitude': 4.3527211,
      'zoom': 15
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Parking',
      'Garden'
    ],
    'host': {
      'isPro': true,
      'name': 'Sophie',
      'avatarUrl': 'avatar-sophie.jpg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.8,
    'bedrooms': 3,
    'maxAdults': 5
  },




  {
    'id': 'eee88a8e-3f92-466f-9a88-cb6db5638c5e',
    'title': 'Canal View Apartment',
    'description': 'Stunning apartment with direct canal view in the historic center of Amsterdam.',
    'type': 'apartment',
    'price': 510,
    'images': [
      'amsterdam1.jpg',
      'amsterdam2.jpg',
      'amsterdam3.jpg',
      'amsterdam4.jpg',
      'amsterdam5.jpg'
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3702157,
        'longitude': 4.8951679,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3722157,
      'longitude': 4.8931679,
      'zoom': 17
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Dishwasher',
      'Washing machine',
      'Bicycle rental',
      'Canal view',
      'Balcony'
    ],
    'host': {
      'isPro': true,
      'name': 'Lucas',
      'avatarUrl': 'avatar-lucas.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.9,
    'bedrooms': 2,
    'maxAdults': 4
  }
];

export { offers };