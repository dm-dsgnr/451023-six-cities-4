import React from "react";
import PropTypes from "prop-types";
import {cityType} from "../../proptypes/proptypes.jsx";

import {ActionCreator} from "../../reducer/app/app.js";
import {connect} from "react-redux";

const City = (props) => {
  const {city, isActive, onCityClick} = props;

  return <li className="locations__item">
    <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`} href="#"
      onClick={() => {
        onCityClick(city);
      }}
    >
      <span>{city.name}</span>
    </a>
  </li>;
};

City.propTypes = {
  city: cityType,
  isActive: PropTypes.bool.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {City};
export default connect(null, mapDispatchToProps)(React.memo(City));
