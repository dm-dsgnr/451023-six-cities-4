import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import City from "../city/city.jsx";
import {getUniqueObjectsArray} from "../../utils.js";

class CitiesList extends PureComponent {
  constructor(props) {
    super(props);

    const {city} = props;

    this.state = {
      activeCity: city,
    };
  }

  render() {
    const {city, onCityClick, offers} = this.props;

    const allCities = offers.map((offer) => offer.city);

    const citiesToShow = getUniqueObjectsArray(allCities, `name`).slice(0, 6);

    return <ul className="locations__list tabs__list">
      {citiesToShow.map((cityItem, i) => {
        return <City
          onCityClick={() => {
            onCityClick(cityItem);
          }}
          city={cityItem}
          isActive={city.name === cityItem.name}
          key={i + cityItem.name}
        />;
      })}
    </ul>;
  }
}

CitiesList.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.array.isRequired,
  }).isRequired,
  offers: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
