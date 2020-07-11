it(``, function () {});

// import React from "react";
// import renderer from "react-test-renderer";
// import configureStore from "redux-mock-store";
// import {Provider} from "react-redux";
// import {App} from "./app.jsx";

// const mockStore = configureStore([]);

// const offers = [
//   {
//     id: 12345,
//     coordinates: [52.3909553943508, 4.85309666406198],
//     city: {
//       name: `Amsterdam`,
//       coordinates: [52.3909553943508, 4.85309666406198],
//     },
//     pictures: [
//       `room.jpg`,
//       `apartment-01.jpg`,
//       `apartment-02.jpg`,
//       `apartment-03.jpg`,
//       `apartment-small-03.jpg`,
//       `apartment-small-04.jpg`
//     ],
//     price: 140,
//     rating: `80`,
//     title: `Wood and stone place`,
//     type: `House`,
//     isBookmarked: true,
//     isPremium: false,
//     description: [
//       `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//       `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
//     ],
//     bedroomsCount: 3,
//     guestsCount: 4,
//     appliances: [
//       `Wifi`,
//       `Heating`,
//       `Kitchen`,
//       `Cable TV`
//     ],
//     host: {
//       picture: `avatar-angelina.jpg`,
//       name: `Adam Smith`,
//       isSuper: true,
//     }
//   },
//   {
//     id: 12345,
//     coordinates: [48.854408, 2.338527],
//     city: {
//       name: `Dusseldorf`,
//       coordinates: [52.3909553943508, 4.85309666406198],
//     },
//     pictures: [
//       `apartment-01.jpg`,
//       `room.jpg`,
//       `apartment-02.jpg`,
//       `apartment-03.jpg`,
//       `apartment-small-03.jpg`,
//       `apartment-small-04.jpg`
//     ],
//     price: 88,
//     rating: `20`,
//     title: `Cozy seaview apartment`,
//     type: `Apartment`,
//     isBookmarked: false,
//     isPremium: true,
//     description: [
//       `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//       `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
//     ],
//     bedroomsCount: 3,
//     guestsCount: 4,
//     appliances: [
//       `Wifi`,
//       `Heating`,
//       `Kitchen`,
//       `Cable TV`
//     ],
//     host: {
//       picture: `avatar-angelina.jpg`,
//       name: `Adam Smith`,
//       isSuper: true,
//     }
//   },
// ];

// const city = {
//   name: `Amsterdam`,
//   coordinates: [52.373057, 4.892557],
// };

// export const PageType = {
//   INDEX: `INDEX`,
//   PROPERTY: `PROPERTY`,
// };

// const nearCoordinates = [[52.3909553943508, 4.85309666406198], [52.373057, 4.892557]];

// const activeOffer = offers[0];

// describe(`Render App`, () => {
//   it(`Render MainScreen`, () => {
//     const store = mockStore({
//       offers,
//       activeOffer,
//       page: PageType.PROPERTY,
//       city,
//       nearOffers: offers,
//       offersToShow: offers,
//       placesCoordinates: city.coordinates,
//       nearCoordinates,
//     });

//     const tree = renderer
//       .create(
//           <Provider store={store}>
//             <App
//               offers={offers}
//               city={city}
//               onCityClick={() => {}}
//               page={PageType.INDEX}
//               activeOffer={activeOffer}
//             />
//           </Provider>
//       )
//       .toJSON();

//     expect(tree).toMatchSnapshot();
//   });

//   it(`Render PropertyScreen`, () => {
//     const store = mockStore({
//       offers,
//       activeOffer,
//       page: PageType.PROPERTY,
//       city,
//       nearOffers: offers,
//       offersToShow: offers,
//       placesCoordinates: city.coordinates,
//       nearCoordinates,
//     });

//     const tree = renderer
//       .create(
//           <Provider store={store}>
//             <App
//               offers={offers}
//               activeOffer={activeOffer}
//               page={PageType.PROPERTY}
//               city={city}
//               onCityClick={() => {}}
//             />
//           </Provider>, {
//             createNodeMock: () => {
//               return {};
//             }
//           }
//       )
//       .toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });
