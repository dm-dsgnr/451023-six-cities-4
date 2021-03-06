export const parseOffer = (data) => {
  return {
    bedrooms: data.bedrooms,
    city: {
      location: {
        latitude: data.city.location.latitude,
        longitude: data.city.location.longitude,
        zoom: data.city.location.zoom
      },
      name: data.city.name,
    },
    description: data.description,
    goods: data.goods,
    host: {
      avatarUrl: data.host.avatar_url,
      id: data.host.id,
      isPro: data.host.is_pro,
      name: data.host.name,
    },
    id: data.id,
    images: data.images,
    isFavorite: data.is_favorite,
    isPremium: data.is_premium,
    location: {
      latitude: data.location.latitude,
      longitude: data.location.longitude,
      zoom: data.location.zoom,
    },
    maxAdults: data.max_adults,
    previewImage: data.preview_image,
    price: data.price,
    rating: data.rating,
    title: data.title,
    type: data.type,
  };
};

export const parseOfferToPost = (data) => {
  return {
    "bedrooms": data.bedrooms,
    "city": {
      "location": {
        "latitude": data.city.location.latitude,
        "longitude": data.city.location.longitude,
        "zoom": data.city.location.zoom
      },
      "name": data.city.name,
    },
    "description": data.description,
    "goods": data.goods,
    "host": {
      "avatar_url": data.host.avatarUrl,
      "id": data.host.id,
      "is_pro": data.host.isPro,
      "name": data.host.name,
    },
    "id": data.id,
    "images": data.images,
    "is_favorite": data.isFavorite,
    "is_premium": data.isPremium,
    "location": {
      "latitude": data.location.latitude,
      "longitude": data.location.longitude,
      "zoom": data.location.zoom,
    },
    "max_adults": data.maxAdults,
    "preview_image": data.previewImage,
    "price": data.price,
    "rating": data.rating,
    "title": data.title,
    "type": data.type,
  };
};
