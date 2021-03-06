import React, {Fragment} from "react";
import PropTypes from "prop-types";

const ReviewFormStar = (props) => {
  const {
    ratingNumber,
    onRatingChange,
    isChecked
  } = props;

  return <Fragment>
    <input className="form__rating-input visually-hidden" name="rating" value={ratingNumber} id={`${ratingNumber}-stars`} type="radio"
      onChange={onRatingChange}
      checked={isChecked}
    />
    <label htmlFor={`${ratingNumber}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </Fragment>;
};

ReviewFormStar.propTypes = {
  ratingNumber: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default ReviewFormStar;


