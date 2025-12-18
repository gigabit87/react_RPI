import { OffersList } from "../types/offer";

const offersList: OffersList[] = [
  {
    id: 'bbb88a8e-3f92-466f-9a88-cb6db5638c2b',
    title: 'wood and stone place',
    type: 'apartment',
    price: 370,
    previewImage: 'img/mocks/1.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610808080884,
      longitude: 2.342499,
      zoom: 18
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9
  },
  {
    id: 'ccc88a8e-3f92-466f-9a88-cb6db5638c3c',
    title: 'Modern Loft in City Center',
    type: 'apartment',
    price: 290,
    previewImage: 'img/mocks/7.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.9602786,
        zoom: 13
      }
    },
    location: {
      latitude: 50.941531,
      longitude: 6.9582786,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  },
  {
    id: 'ddd88a8e-3f92-466f-9a88-cb6db5638c4d',
    title: 'Charming Townhouse',
    type: 'house',
    price: 420,
    previewImage: 'img/mocks/13.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503463,
        longitude: 4.3517211,
        zoom: 13
      }
    },
    location: {
      latitude: 50.8483463,
      longitude: 4.3527211,
      zoom: 15
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8
  },
  {
    id: 'eee88a8e-3f92-466f-9a88-cb6db5638c5e',
    title: 'Canal View Apartment',
    type: 'apartment',
    price: 510,
    previewImage: 'img/mocks/19.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3702157,
        longitude: 4.8951679,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3722157,
      longitude: 4.8831679,
      zoom: 17
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9
  },
  {
    id: 'fff88a8e-3f92-466f-9a88-cb6db5638c6f',
    title: 'Cozy Studio in Amsterdam Center',
    type: 'apartment',
    price: 280,
    previewImage: 'img/mocks/25.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3702157,
        longitude: 4.8951679,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3559553943508,
      longitude: 4.84309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: 'ggg88a8e-3f92-466f-9a88-cb6db5638c7g',
    title: 'Luxury Penthouse with Terrace',
    type: 'apartment',
    price: 650,
    previewImage: 'img/mocks/31.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3702157,
        longitude: 4.8951679,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3959553943508,
      longitude: 4.949309666406198,
      zoom: 17
    },
    isFavorite: true,
    isPremium: true,
    rating: 5.0
  },
  {
    id: 'hhh88a8e-3f92-466f-9a88-cb6db5638c8h',
    title: 'Modern Apartment near Museum District',
    type: 'apartment',
    price: 420,
    previewImage: 'img/mocks/37.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3702157,
        longitude: 4.8951679,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3859553943508,
      longitude: 4.959309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.6
  },
  {
    id: 'iii88a8e-3f92-466f-9a88-cb6db5638c9i',
    title: 'Elegant Apartment near Eiffel Tower',
    type: 'apartment',
    price: 450,
    previewImage: 'img/mocks/43.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85861,
      longitude: 2.353499,
      zoom: 17
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8
  },
  {
    id: 'jjj88a8e-3f92-466f-9a88-cb6db5638c0j',
    title: 'Cozy Studio in Montmartre',
    type: 'room',
    price: 180,
    previewImage: 'img/mocks/49.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.88661,
      longitude: 2.343499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.4
  },
  {
    id: 'kkk88a8e-3f92-466f-9a88-cb6db5638c1k',
    title: 'Luxury Loft in Le Marais',
    type: 'apartment',
    price: 520,
    previewImage: 'img/mocks/55.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.362499,
      zoom: 17
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9
  },
  {
    id: 'lll88a8e-3f92-466f-9a88-cb6db5638c2l',
    title: 'Historic Apartment in Latin Quarter',
    type: 'apartment',
    price: 380,
    previewImage: 'img/mocks/61.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85361,
      longitude: 2.348499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.6
  },
  {
    id: 'mmm88a8e-3f92-466f-9a88-cb6db5638c3m',
    title: 'Modern Apartment near Cathedral',
    type: 'apartment',
    price: 320,
    previewImage: 'img/mocks/67.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.9602786,
        zoom: 13
      }
    },
    location: {
      latitude: 50.942531,
      longitude: 6.9582786,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  },
  {
    id: 'nnn88a8e-3f92-466f-9a88-cb6db5638c4n',
    title: 'Cozy House in Old Town',
    type: 'house',
    price: 480,
    previewImage: 'img/mocks/73.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.9602786,
        zoom: 13
      }
    },
    location: {
      latitude: 50.936531,
      longitude: 6.9612786,
      zoom: 15
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8
  },
  {
    id: 'ooo88a8e-3f92-466f-9a88-cb6db5638c5o',
    title: 'Stylish Studio in City Center',
    type: 'apartment',
    price: 250,
    previewImage: 'img/mocks/79.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.9602786,
        zoom: 13
      }
    },
    location: {
      latitude: 50.938531,
      longitude: 6.9592786,
      zoom: 17
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: 'ppp88a8e-3f92-466f-9a88-cb6db5638c6p',
    title: 'Luxury Penthouse with Rhine View',
    type: 'apartment',
    price: 680,
    previewImage: 'img/mocks/85.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.9602786,
        zoom: 13
      }
    },
    location: {
      latitude: 50.940531,
      longitude: 6.9622786,
      zoom: 17
    },
    isFavorite: true,
    isPremium: true,
    rating: 5.0
  },

  {
    id: 'qqq88a8e-3f92-466f-9a88-cb6db5638c7q',
    title: 'Elegant Apartment near Grand Place',
    type: 'apartment',
    price: 390,
    previewImage: 'img/mocks/91.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503463,
        longitude: 4.3517211,
        zoom: 13
      }
    },
    location: {
      latitude: 50.8483463,
      longitude: 4.3527211,
      zoom: 17
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8
  },
  {
    id: 'rrr88a8e-3f92-466f-9a88-cb6db5638c8r',
    title: 'Cozy Studio in European Quarter',
    type: 'apartment',
    price: 220,
    previewImage: 'img/mocks/97.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503463,
        longitude: 4.3517211,
        zoom: 13
      }
    },
    location: {
      latitude: 50.8513463,
      longitude: 4.3507211,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3
  },
  {
    id: 'sss88a8e-3f92-466f-9a88-cb6db5638c9s',
    title: 'Spacious Family House',
    type: 'house',
    price: 550,
    previewImage: 'img/mocks/103.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503463,
        longitude: 4.3517211,
        zoom: 13
      }
    },
    location: {
      latitude: 50.8493463,
      longitude: 4.3537211,
      zoom: 15
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9
  },
  {
    id: 'ttt88a8e-3f92-466f-9a88-cb6db5638c0t',
    title: 'Modern Loft in Art Nouveau District',
    type: 'apartment',
    price: 440,
    previewImage: 'img/mocks/109.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503463,
        longitude: 4.3517211,
        zoom: 13
      }
    },
    location: {
      latitude: 50.8523463,
      longitude: 4.3547211,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  },

  {
    id: 'uuu88a8e-3f92-466f-9a88-cb6db5638c1u',
    title: 'Charming Houseboat on Canal',
    type: 'house',
    price: 580,
    previewImage: 'img/mocks/115.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3702157,
        longitude: 4.8951679,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3652157,
      longitude: 4.9101679,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9
  },
  // Hamburg offers
  {
    id: 'vvv88a8e-3f92-466f-9a88-cb6db5638c2v',
    title: 'Modern Apartment in Speicherstadt',
    type: 'apartment',
    price: 350,
    previewImage: 'img/mocks/121.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 13
      }
    },
    location: {
      latitude: 53.552086,
      longitude: 9.994682,
      zoom: 17
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  },
  {
    id: 'www88a8e-3f92-466f-9a88-cb6db5638c3w',
    title: 'Cozy Studio near Alster Lake',
    type: 'apartment',
    price: 240,
    previewImage: 'img/mocks/127.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 13
      }
    },
    location: {
      latitude: 53.550086,
      longitude: 9.992682,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: 'xxx88a8e-3f92-466f-9a88-cb6db5638c4x',
    title: 'Luxury Penthouse with Harbor View',
    type: 'apartment',
    price: 720,
    previewImage: 'img/mocks/133.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 13
      }
    },
    location: {
      latitude: 53.553086,
      longitude: 9.995682,
      zoom: 17
    },
    isFavorite: true,
    isPremium: true,
    rating: 5.0
  },
  {
    id: 'yyy88a8e-3f92-466f-9a88-cb6db5638c5y',
    title: 'Historic Townhouse in St. Pauli',
    type: 'house',
    price: 490,
    previewImage: 'img/mocks/139.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 13
      }
    },
    location: {
      latitude: 53.549086,
      longitude: 9.991682,
      zoom: 15
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6
  },
  {
    id: 'zzz88a8e-3f92-466f-9a88-cb6db5638c6z',
    title: 'Modern Apartment in HafenCity',
    type: 'apartment',
    price: 410,
    previewImage: 'img/mocks/145.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 13
      }
    },
    location: {
      latitude: 53.551086,
      longitude: 9.996682,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8
  },
  // Dusseldorf offers
  {
    id: 'aaa88a8e-3f92-466f-9a88-cb6db5638c7a',
    title: 'Elegant Apartment in Altstadt',
    type: 'apartment',
    price: 360,
    previewImage: 'img/mocks/151.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.227741,
        longitude: 6.773456,
        zoom: 13
      }
    },
    location: {
      latitude: 51.228741,
      longitude: 6.774456,
      zoom: 17
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  },
  {
    id: 'bbb88a8e-3f92-466f-9a88-cb6db5638c8b',
    title: 'Cozy Studio near Königsallee',
    type: 'apartment',
    price: 230,
    previewImage: 'img/mocks/157.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.227741,
        longitude: 6.773456,
        zoom: 13
      }
    },
    location: {
      latitude: 51.226741,
      longitude: 6.772456,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.4
  },
  {
    id: 'ccc88a8e-3f92-466f-9a88-cb6db5638c9c',
    title: 'Luxury Loft in MedienHafen',
    type: 'apartment',
    price: 590,
    previewImage: 'img/mocks/163.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.227741,
        longitude: 6.773456,
        zoom: 13
      }
    },
    location: {
      latitude: 51.229741,
      longitude: 6.775456,
      zoom: 17
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9
  },
  {
    id: 'ddd88a8e-3f92-466f-9a88-cb6db5638c0d',
    title: 'Spacious Family House',
    type: 'house',
    price: 530,
    previewImage: 'img/mocks/169.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.227741,
        longitude: 6.773456,
        zoom: 13
      }
    },
    location: {
      latitude: 51.225741,
      longitude: 6.771456,
      zoom: 15
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8
  },
  {
    id: 'eee88a8e-3f92-466f-9a88-cb6db5638c1e',
    title: 'Modern Apartment with Rhine View',
    type: 'apartment',
    price: 400,
    previewImage: 'img/mocks/175.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.227741,
        longitude: 6.773456,
        zoom: 13
      }
    },
    location: {
      latitude: 51.227741,
      longitude: 6.776456,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  }
];

export { offersList };

