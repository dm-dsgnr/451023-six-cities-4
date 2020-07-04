import {reducer, ActionCreator, ActionType} from "./reducer.js";

const offers = [
  {
    id: 12345,
    coordinates: [52.3909553943508, 4.85309666406198],
    city: {
      name: `Amsterdam`,
      coordinates: [52.373057, 4.892557],
    },
    pictures: [
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `apartment-small-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 140,
    rating: `80`,
    title: `Wood and stone place`,
    type: `House`,
    isBookmarked: true,
    isPremium: false,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    bedroomsCount: 3,
    guestsCount: 4,
    appliances: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`
    ],
    host: {
      picture: `avatar-angelina.jpg`,
      name: `Adam Smith`,
      isSuper: true,
    }
  },
  {
    id: 12345,
    coordinates: [48.854408, 2.338527],
    city: {
      name: `Dusseldorf`,
      coordinates: [52.3909553943508, 4.85309666406198],
    },
    pictures: [
      `apartment-01.jpg`,
      `room.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `apartment-small-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 88,
    rating: `20`,
    title: `Cozy seaview apartment`,
    type: `Apartment`,
    isBookmarked: false,
    isPremium: true,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    bedroomsCount: 3,
    guestsCount: 4,
    appliances: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`
    ],
    host: {
      picture: `avatar-angelina.jpg`,
      name: `Adam Smith`,
      isSuper: true,
    }
  },
];

const city = offers[0].city;

const offer = offers[0];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers,
    city,
    page: `INDEX`,
    activeOffer: undefined,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(city)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: city,
    });
  });

  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.setActiveOffer(offer)).toEqual({
      type: ActionType.SET_ACTIVE_OFFER,
      payload: offer,
    });
  });
});
