import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
  {
    'id': 'bbb88a8e-3f92-466f-9a88-cb6db5638c2b',
    'title': 'wood and stone place',
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for family',
    'type': 'apartment',
    'price': 370,
    'images': [
      'img/mocks/1.jpg',
      'img/mocks/2.jpg',
      'img/mocks/3.jpg',
      'img/mocks/4.jpg',
      'img/mocks/5.jpg',
      'img/mocks/6.jpg'
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
      'img/mocks/7.jpg',
      'img/mocks/8.jpg',
      'img/mocks/9.jpg',
      'img/mocks/10.jpg',
      'img/mocks/11.jpg',
      'img/mocks/12.jpg'
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
      'img/mocks/13.jpg',
      'img/mocks/14.jpg',
      'img/mocks/15.jpg',
      'img/mocks/16.jpg',
      'img/mocks/17.jpg',
      'img/mocks/18.jpg'
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
      'img/mocks/19.jpg',
      'img/mocks/20.jpg',
      'img/mocks/21.jpg',
      'img/mocks/22.jpg',
      'img/mocks/23.jpg',
      'img/mocks/24.jpg'
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
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
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
  },
  {
    'id': 'fff88a8e-3f92-466f-9a88-cb6db5638c6f',
    'title': 'Cozy Studio in Amsterdam Center',
    'description': 'Perfect studio apartment in the heart of Amsterdam, close to all attractions.',
    'type': 'apartment',
    'price': 280,
    'images': [
      'img/mocks/25.jpg',
      'img/mocks/26.jpg',
      'img/mocks/27.jpg',
      'img/mocks/28.jpg',
      'img/mocks/29.jpg',
      'img/mocks/30.jpg'
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
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine'
    ],
    'host': {
      'isPro': false,
      'name': 'Emma',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.5,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'ggg88a8e-3f92-466f-9a88-cb6db5638c7g',
    'title': 'Luxury Penthouse with Terrace',
    'description': 'Amazing penthouse with private terrace and panoramic city views.',
    'type': 'apartment',
    'price': 650,
    'images': [
      'img/mocks/31.jpg',
      'img/mocks/32.jpg',
      'img/mocks/33.jpg',
      'img/mocks/34.jpg',
      'img/mocks/35.jpg',
      'img/mocks/36.jpg'
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
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 17
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Terrace',
      'Balcony'
    ],
    'host': {
      'isPro': true,
      'name': 'David',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 5.0,
    'bedrooms': 3,
    'maxAdults': 6
  },
  {
    'id': 'hhh88a8e-3f92-466f-9a88-cb6db5638c8h',
    'title': 'Modern Apartment near Museum District',
    'description': 'Beautiful modern apartment located near the famous museum district.',
    'type': 'apartment',
    'price': 420,
    'images': [
      'img/mocks/37.jpg',
      'img/mocks/38.jpg',
      'img/mocks/39.jpg',
      'img/mocks/40.jpg',
      'img/mocks/41.jpg',
      'img/mocks/42.jpg'
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
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Dishwasher',
      'TV',
      'Parking'
    ],
    'host': {
      'isPro': true,
      'name': 'Maria',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.6,
    'bedrooms': 2,
    'maxAdults': 4
  },
  // Paris offers (4 more)
  {
    'id': 'iii88a8e-3f92-466f-9a88-cb6db5638c9i',
    'title': 'Elegant Apartment near Eiffel Tower',
    'description': 'Charming apartment with stunning views of the Eiffel Tower. Perfect location for exploring Paris.',
    'type': 'apartment',
    'price': 450,
    'images': [
      'img/mocks/43.jpg',
      'img/mocks/44.jpg',
      'img/mocks/45.jpg',
      'img/mocks/46.jpg',
      'img/mocks/47.jpg',
      'img/mocks/48.jpg'
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
      'latitude': 48.85861,
      'longitude': 2.353499,
      'zoom': 17
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Dishwasher',
      'TV',
      'Balcony',
      'Eiffel Tower view'
    ],
    'host': {
      'isPro': true,
      'name': 'Pierre',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.8,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'jjj88a8e-3f92-466f-9a88-cb6db5638c0j',
    'title': 'Cozy Studio in Montmartre',
    'description': 'Quaint studio in the artistic Montmartre district, close to Sacré-Cœur.',
    'type': 'room',
    'price': 180,
    'images': [
      'img/mocks/49.jpg',
      'img/mocks/50.jpg',
      'img/mocks/51.jpg',
      'img/mocks/52.jpg',
      'img/mocks/53.jpg',
      'img/mocks/54.jpg'
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
      'latitude': 48.88661,
      'longitude': 2.343499,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine'
    ],
    'host': {
      'isPro': false,
      'name': 'Claire',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.4,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'kkk88a8e-3f92-466f-9a88-cb6db5638c1k',
    'title': 'Luxury Loft in Le Marais',
    'description': 'Stylish loft in the trendy Le Marais neighborhood with modern amenities.',
    'type': 'apartment',
    'price': 520,
    'images': [
      'img/mocks/55.jpg',
      'img/mocks/56.jpg',
      'img/mocks/57.jpg',
      'img/mocks/58.jpg',
      'img/mocks/59.jpg',
      'img/mocks/60.jpg'
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
      'latitude': 48.85761,
      'longitude': 2.362499,
      'zoom': 17
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Balcony'
    ],
    'host': {
      'isPro': true,
      'name': 'Antoine',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.9,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'lll88a8e-3f92-466f-9a88-cb6db5638c2l',
    'title': 'Historic Apartment in Latin Quarter',
    'description': 'Beautiful historic apartment in the heart of Latin Quarter, steps from Notre-Dame.',
    'type': 'apartment',
    'price': 380,
    'images': [
      'img/mocks/61.jpg',
      'img/mocks/62.jpg',
      'img/mocks/63.jpg',
      'img/mocks/64.jpg',
      'img/mocks/65.jpg',
      'img/mocks/66.jpg'
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
      'latitude': 48.85361,
      'longitude': 2.348499,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'TV',
      'Historic building'
    ],
    'host': {
      'isPro': false,
      'name': 'Marie',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.6,
    'bedrooms': 1,
    'maxAdults': 3
  },
  // Cologne offers (4 more)
  {
    'id': 'mmm88a8e-3f92-466f-9a88-cb6db5638c3m',
    'title': 'Modern Apartment near Cathedral',
    'description': 'Contemporary apartment with excellent location near Cologne Cathedral and main train station.',
    'type': 'apartment',
    'price': 320,
    'images': [
      'img/mocks/67.jpg',
      'img/mocks/68.jpg',
      'img/mocks/69.jpg',
      'img/mocks/70.jpg',
      'img/mocks/71.jpg',
      'img/mocks/72.jpg'
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
      'latitude': 50.942531,
      'longitude': 6.9582786,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Dishwasher',
      'TV',
      'Parking'
    ],
    'host': {
      'isPro': true,
      'name': 'Hans',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'nnn88a8e-3f92-466f-9a88-cb6db5638c4n',
    'title': 'Cozy House in Old Town',
    'description': 'Traditional German house in the charming old town area, perfect for families.',
    'type': 'house',
    'price': 480,
    'images': [
      'img/mocks/73.jpg',
      'img/mocks/74.jpg',
      'img/mocks/75.jpg',
      'img/mocks/76.jpg',
      'img/mocks/77.jpg',
      'img/mocks/78.jpg'
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
      'latitude': 50.936531,
      'longitude': 6.9612786,
      'zoom': 15
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Garden',
      'Parking'
    ],
    'host': {
      'isPro': true,
      'name': 'Greta',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.8,
    'bedrooms': 3,
    'maxAdults': 6
  },
  {
    'id': 'ooo88a8e-3f92-466f-9a88-cb6db5638c5o',
    'title': 'Stylish Studio in City Center',
    'description': 'Modern studio apartment in the heart of Cologne, close to shopping and restaurants.',
    'type': 'apartment',
    'price': 250,
    'images': [
      'img/mocks/79.jpg',
      'img/mocks/80.jpg',
      'img/mocks/81.jpg',
      'img/mocks/82.jpg',
      'img/mocks/83.jpg',
      'img/mocks/84.jpg'
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
      'latitude': 50.938531,
      'longitude': 6.9592786,
      'zoom': 17
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'TV'
    ],
    'host': {
      'isPro': false,
      'name': 'Klaus',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.5,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'ppp88a8e-3f92-466f-9a88-cb6db5638c6p',
    'title': 'Luxury Penthouse with Rhine View',
    'description': 'Spectacular penthouse with panoramic views of the Rhine River and city skyline.',
    'type': 'apartment',
    'price': 680,
    'images': [
      'img/mocks/85.jpg',
      'img/mocks/86.jpg',
      'img/mocks/87.jpg',
      'img/mocks/88.jpg',
      'img/mocks/89.jpg',
      'img/mocks/90.jpg'
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
      'latitude': 50.940531,
      'longitude': 6.9622786,
      'zoom': 17
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Terrace',
      'River view'
    ],
    'host': {
      'isPro': true,
      'name': 'Wolfgang',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 5.0,
    'bedrooms': 3,
    'maxAdults': 6
  },
  // Brussels offers (4 more)
  {
    'id': 'qqq88a8e-3f92-466f-9a88-cb6db5638c7q',
    'title': 'Elegant Apartment near Grand Place',
    'description': 'Beautiful apartment just steps away from the famous Grand Place, perfect for exploring Brussels.',
    'type': 'apartment',
    'price': 390,
    'images': [
      'img/mocks/91.jpg',
      'img/mocks/92.jpg',
      'img/mocks/93.jpg',
      'img/mocks/94.jpg',
      'img/mocks/95.jpg',
      'img/mocks/96.jpg'
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
      'zoom': 17
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Dishwasher',
      'TV',
      'Balcony'
    ],
    'host': {
      'isPro': true,
      'name': 'Jean',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'rrr88a8e-3f92-466f-9a88-cb6db5638c8r',
    'title': 'Cozy Studio in European Quarter',
    'description': 'Comfortable studio in the European Quarter, ideal for business travelers.',
    'type': 'apartment',
    'price': 220,
    'images': [
      'img/mocks/97.jpg',
      'img/mocks/98.jpg',
      'img/mocks/99.jpg',
      'img/mocks/100.jpg',
      'img/mocks/101.jpg',
      'img/mocks/102.jpg'
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
      'latitude': 50.8513463,
      'longitude': 4.3507211,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'TV'
    ],
    'host': {
      'isPro': false,
      'name': 'Sophie',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.3,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'sss88a8e-3f92-466f-9a88-cb6db5638c9s',
    'title': 'Spacious Family House',
    'description': 'Large family house with garden, perfect for families visiting Brussels.',
    'type': 'house',
    'price': 550,
    'images': [
      'img/mocks/103.jpg',
      'img/mocks/104.jpg',
      'img/mocks/105.jpg',
      'img/mocks/106.jpg',
      'img/mocks/107.jpg',
      'img/mocks/108.jpg'
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
      'latitude': 50.8493463,
      'longitude': 4.3537211,
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
      'Garden',
      'Parking',
      'Playground'
    ],
    'host': {
      'isPro': true,
      'name': 'Luc',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.9,
    'bedrooms': 4,
    'maxAdults': 8
  },
  {
    'id': 'ttt88a8e-3f92-466f-9a88-cb6db5638c0t',
    'title': 'Modern Loft in Art Nouveau District',
    'description': 'Stylish loft in a beautiful Art Nouveau building, close to museums and galleries.',
    'type': 'apartment',
    'price': 440,
    'images': [
      'img/mocks/109.jpg',
      'img/mocks/110.jpg',
      'img/mocks/111.jpg',
      'img/mocks/112.jpg',
      'img/mocks/113.jpg',
      'img/mocks/114.jpg'
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
      'latitude': 50.8523463,
      'longitude': 4.3547211,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Balcony',
      'Art Nouveau style'
    ],
    'host': {
      'isPro': true,
      'name': 'Isabelle',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
    'bedrooms': 2,
    'maxAdults': 4
  },
  // Amsterdam offers (1 more)
  {
    'id': 'uuu88a8e-3f92-466f-9a88-cb6db5638c1u',
    'title': 'Charming Houseboat on Canal',
    'description': 'Unique houseboat experience on Amsterdam canal, with all modern amenities.',
    'type': 'house',
    'price': 580,
    'images': [
      'img/mocks/115.jpg',
      'img/mocks/116.jpg',
      'img/mocks/117.jpg',
      'img/mocks/118.jpg',
      'img/mocks/119.jpg',
      'img/mocks/120.jpg'
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
      'latitude': 52.3752157,
      'longitude': 4.9001679,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Canal view',
      'Unique experience'
    ],
    'host': {
      'isPro': true,
      'name': 'Jan',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.9,
    'bedrooms': 2,
    'maxAdults': 4
  },
  // Hamburg offers (5 new)
  {
    'id': 'vvv88a8e-3f92-466f-9a88-cb6db5638c2v',
    'title': 'Modern Apartment in Speicherstadt',
    'description': 'Contemporary apartment in the historic Speicherstadt district, close to the harbor.',
    'type': 'apartment',
    'price': 350,
    'images': [
      'img/mocks/121.jpg',
      'img/mocks/122.jpg',
      'img/mocks/123.jpg',
      'img/mocks/124.jpg',
      'img/mocks/125.jpg',
      'img/mocks/126.jpg'
    ],
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.551086,
        'longitude': 9.993682,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.552086,
      'longitude': 9.994682,
      'zoom': 17
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Dishwasher',
      'TV',
      'Harbor view'
    ],
    'host': {
      'isPro': true,
      'name': 'Heinrich',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'www88a8e-3f92-466f-9a88-cb6db5638c3w',
    'title': 'Cozy Studio near Alster Lake',
    'description': 'Charming studio apartment near the beautiful Alster Lake, perfect for couples.',
    'type': 'apartment',
    'price': 240,
    'images': [
      'img/mocks/127.jpg',
      'img/mocks/128.jpg',
      'img/mocks/129.jpg',
      'img/mocks/130.jpg',
      'img/mocks/131.jpg',
      'img/mocks/132.jpg'
    ],
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.551086,
        'longitude': 9.993682,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.550086,
      'longitude': 9.992682,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Lake view'
    ],
    'host': {
      'isPro': false,
      'name': 'Anna',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.5,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'xxx88a8e-3f92-466f-9a88-cb6db5638c4x',
    'title': 'Luxury Penthouse with Harbor View',
    'description': 'Stunning penthouse with panoramic views of the harbor and city skyline.',
    'type': 'apartment',
    'price': 720,
    'images': [
      'img/mocks/133.jpg',
      'img/mocks/134.jpg',
      'img/mocks/135.jpg',
      'img/mocks/136.jpg',
      'img/mocks/137.jpg',
      'img/mocks/138.jpg'
    ],
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.551086,
        'longitude': 9.993682,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.553086,
      'longitude': 9.995682,
      'zoom': 17
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Terrace',
      'Harbor view'
    ],
    'host': {
      'isPro': true,
      'name': 'Klaus',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 5.0,
    'bedrooms': 3,
    'maxAdults': 6
  },
  {
    'id': 'yyy88a8e-3f92-466f-9a88-cb6db5638c5y',
    'title': 'Historic Townhouse in St. Pauli',
    'description': 'Beautiful historic townhouse in the vibrant St. Pauli district, close to nightlife.',
    'type': 'house',
    'price': 490,
    'images': [
      'img/mocks/139.jpg',
      'img/mocks/140.jpg',
      'img/mocks/141.jpg',
      'img/mocks/142.jpg',
      'img/mocks/143.jpg',
      'img/mocks/144.jpg'
    ],
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.551086,
        'longitude': 9.993682,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.549086,
      'longitude': 9.991682,
      'zoom': 15
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Garden',
      'Historic building'
    ],
    'host': {
      'isPro': true,
      'name': 'Friedrich',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.6,
    'bedrooms': 3,
    'maxAdults': 5
  },
  {
    'id': 'zzz88a8e-3f92-466f-9a88-cb6db5638c6z',
    'title': 'Modern Apartment in HafenCity',
    'description': 'Contemporary apartment in the modern HafenCity district, close to Elbphilharmonie.',
    'type': 'apartment',
    'price': 410,
    'images': [
      'img/mocks/145.jpg',
      'img/mocks/146.jpg',
      'img/mocks/147.jpg',
      'img/mocks/148.jpg',
      'img/mocks/149.jpg',
      'img/mocks/150.jpg'
    ],
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.551086,
        'longitude': 9.993682,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.551086,
      'longitude': 9.996682,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Modern design'
    ],
    'host': {
      'isPro': true,
      'name': 'Stefan',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.8,
    'bedrooms': 2,
    'maxAdults': 4
  },
  // Dusseldorf offers (5 new)
  {
    'id': 'aaa88a8e-3f92-466f-9a88-cb6db5638c7a',
    'title': 'Elegant Apartment in Altstadt',
    'description': 'Beautiful apartment in the historic Old Town, close to Rhine promenade and shopping.',
    'type': 'apartment',
    'price': 360,
    'images': [
      'img/mocks/151.jpg',
      'img/mocks/152.jpg',
      'img/mocks/153.jpg',
      'img/mocks/154.jpg',
      'img/mocks/155.jpg',
      'img/mocks/156.jpg'
    ],
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.227741,
        'longitude': 6.773456,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.228741,
      'longitude': 6.774456,
      'zoom': 17
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Dishwasher',
      'TV',
      'Balcony',
      'Rhine view'
    ],
    'host': {
      'isPro': true,
      'name': 'Michael',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'bbb88a8e-3f92-466f-9a88-cb6db5638c8b',
    'title': 'Cozy Studio near Königsallee',
    'description': 'Comfortable studio in the heart of Dusseldorf, close to famous shopping street.',
    'type': 'apartment',
    'price': 230,
    'images': [
      'img/mocks/157.jpg',
      'img/mocks/158.jpg',
      'img/mocks/159.jpg',
      'img/mocks/160.jpg',
      'img/mocks/161.jpg',
      'img/mocks/162.jpg'
    ],
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.227741,
        'longitude': 6.773456,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.226741,
      'longitude': 6.772456,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'TV'
    ],
    'host': {
      'isPro': false,
      'name': 'Sarah',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.4,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'ccc88a8e-3f92-466f-9a88-cb6db5638c9c',
    'title': 'Luxury Loft in MedienHafen',
    'description': 'Stylish loft in the modern MedienHafen district with stunning architecture.',
    'type': 'apartment',
    'price': 590,
    'images': [
      'img/mocks/163.jpg',
      'img/mocks/164.jpg',
      'img/mocks/165.jpg',
      'img/mocks/166.jpg',
      'img/mocks/167.jpg',
      'img/mocks/168.jpg'
    ],
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.227741,
        'longitude': 6.773456,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.229741,
      'longitude': 6.775456,
      'zoom': 17
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Modern architecture'
    ],
    'host': {
      'isPro': true,
      'name': 'Thomas',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.9,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'ddd88a8e-3f92-466f-9a88-cb6db5638c0d',
    'title': 'Spacious Family House',
    'description': 'Large family house with garden, perfect for families visiting Dusseldorf.',
    'type': 'house',
    'price': 530,
    'images': [
      'img/mocks/169.jpg',
      'img/mocks/170.jpg',
      'img/mocks/171.jpg',
      'img/mocks/172.jpg',
      'img/mocks/173.jpg',
      'img/mocks/174.jpg'
    ],
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.227741,
        'longitude': 6.773456,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.225741,
      'longitude': 6.771456,
      'zoom': 15
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Garden',
      'Parking',
      'Playground'
    ],
    'host': {
      'isPro': true,
      'name': 'Christina',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.8,
    'bedrooms': 4,
    'maxAdults': 8
  },
  {
    'id': 'eee88a8e-3f92-466f-9a88-cb6db5638c1e',
    'title': 'Modern Apartment with Rhine View',
    'description': 'Contemporary apartment with beautiful views of the Rhine River.',
    'type': 'apartment',
    'price': 400,
    'images': [
      'img/mocks/175.jpg',
      'img/mocks/176.jpg',
      'img/mocks/177.jpg',
      'img/mocks/178.jpg',
      'img/mocks/179.jpg',
      'img/mocks/180.jpg'
    ],
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.227741,
        'longitude': 6.773456,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.227741,
      'longitude': 6.776456,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Balcony',
      'Rhine view'
    ],
    'host': {
      'isPro': true,
      'name': 'Daniel',
      'avatarUrl': 'avatar.svg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
    'bedrooms': 2,
    'maxAdults': 4
  }
];

export { offers };