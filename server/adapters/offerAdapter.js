const cityCoordinates = {
   Paris: { latitude: 48.8566, longitude: 2.3522, zoom: 13 },
   Cologne: { latitude: 50.9375, longitude: 6.9603, zoom: 13 },
   Brussels: { latitude: 50.8503, longitude: 4.3517, zoom: 13 },
   Amsterdam: { latitude: 52.3676, longitude: 4.9041, zoom: 13 },
   Hamburg: { latitude: 53.5511, longitude: 9.9937, zoom: 13 },
   Dusseldorf: { latitude: 51.2277, longitude: 6.7735, zoom: 13 }
 };
 
 const getBaseUrl = () => `http://localhost:5000`;
 
 const adaptOfferToClient = (offer) => {
   const baseUrl = getBaseUrl();
   const cityLocation = cityCoordinates[offer.city];
   
   let previewImage = offer.previewImage;
   if (previewImage && !previewImage.startsWith('http')) {
     previewImage = `${baseUrl}${previewImage}`;
   }
   
   return {
     id: String(offer.id),
     title: offer.title,
     type: offer.type,
     price: offer.price,
     city: {
       name: offer.city,
       location: cityLocation
     },
     location: offer.latitude && offer.longitude ? {
       latitude: offer.latitude,
       longitude: offer.longitude
     } : { latitude: 0, longitude: 0 },
     isFavorite: offer.isFavorite,
     isPremium: offer.isPremium,
     rating: parseFloat(offer.rating),
     previewImage
   };
 };

export const adaptFullOfferToClient = (offer) => {
  const baseUrl = getBaseUrl();
  const cityLocation = cityCoordinates[offer.city];

  const previewImage = offer.previewImage && !offer.previewImage.startsWith('http') 
    ? `${baseUrl}${offer.previewImage}` 
    : offer.previewImage;

  const images = offer.photos && offer.photos.length > 0 
    ? offer.photos.map(photo => photo.startsWith('http') ? photo : `${baseUrl}${photo}`)
    : [previewImage];

  const goods = offer.features && offer.features.length > 0 
    ? offer.features 
    : ['Wi-Fi', 'Heating', 'Kitchen'];

  const host = offer.author ? {
    name: offer.author.username,
    avatarUrl: offer.author.avatar && !offer.author.avatar.startsWith('http') 
      ? `${baseUrl}${offer.author.avatar}` 
      : offer.author.avatar || '/img/avatar.svg',
    isPro: offer.author.userType === 'pro'
  } : {
    name: 'Unknown',
    avatarUrl: '/img/avatar.svg',
    isPro: false
  };

  return {
    id: String(offer.id),
    title: offer.title,
    description: offer.description,
    type: offer.type,
    price: offer.price,
    city: {
      name: offer.city,
      location: cityLocation
    },
    location: {
      latitude: offer.latitude,
      longitude: offer.longitude
    },
    isFavorite: offer.isFavorite,
    isPremium: offer.isPremium,
    rating: parseFloat(offer.rating),
    previewImage,
    images,
    goods: goods,
    bedrooms: offer.rooms || 2,
    maxAdults: offer.guests || 4,
    commentsCount: offer.commentsCount || 0,
    host: host
  };
};

export { adaptOfferToClient };