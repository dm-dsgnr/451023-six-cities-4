import {SortType, MONTHS} from "./const.js";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getUniqueObjectsArray = (array, key) => {
  return Object.values(array.reduce((acc, it) => Object.assign(acc, {[it[key]]: it}), {}));
};

export const formatCommentDate = (dateString) => {
  const date = new Date(Date.parse(dateString));
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

export const replaceItemInArray = (array, newItem, key) => {
  return array.map((item) => {
    if (item.id === newItem.id) {
      return extend(item, {
        [key]: !item[key],
      });
    }
    return item;
  });
};

export const getArrayWithoutElement = (array, index) => {
  const ret = array.slice();
  ret.splice(index, 1);
  return ret;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getSortedOffers = (offers, sortType) => {
  const showingOffers = offers.slice();

  switch (sortType) {
    case SortType.TO_HIGH:
      return showingOffers.sort(sortArray(`price`, true));
    case SortType.TO_LOW:
      return showingOffers.sort(sortArray(`price`));
    case SortType.TOP_RATED:
      return showingOffers.sort(sortArray(`rating`));
    case SortType.POPULAR:
      return showingOffers;
  }

  return showingOffers;
};

export const getFilteredOffers = (allOffers, city) => {
  return allOffers.filter((offer) => {
    return offer.city.name === city.name;
  });
};

export const getPlacesCoordinates = (shownOffers) => {
  return shownOffers.map((offer) => Array.of(offer.location.latitude, offer.location.longitude));
};

export const sortArray = (property, asc = false, length = false) => {

  let sortOrder = 1;

  if (!asc) {
    sortOrder = -1;
  }

  if (length) {
    return (a, b) => {
      if (a[property].length < b[property].length) {
        return -sortOrder;
      } return sortOrder;
    };
  } return (a, b) => {
    if (a[property] < b[property]) {
      return -sortOrder;
    } return sortOrder;
  };
};
