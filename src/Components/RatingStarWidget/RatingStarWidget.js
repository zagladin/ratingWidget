import styles from './styles.module.scss';
import React, {Fragment} from 'react';
import StarIcon from '../Icon/StarIcon';

const RatingStarWidget = ({rating}) => {

  function fillingTheStart(starPosition) {
    const customStarStyle = {
      marginRight: 3,
    };

    const redColor = '#EC0909';
    const grayColor = '#CBC8C8';

    const numberRating = parseFloat(rating);

    const isInteger = Number.isInteger(numberRating);

    const svgOffset =
        numberRating
            ? `${(numberRating - Math.floor(numberRating)).toFixed(1) * 100}%`
            : '0%';

    if (rating === 0) {
      return <StarIcon
          fill={grayColor}
          style={customStarStyle}
      />;
    }
    if (starPosition === 1 && rating < 1) {
      return <StarIcon
          offset={svgOffset}
          fill={redColor}
          halfFilled={true}
          style={customStarStyle}
      />;
    } else if (starPosition <= rating || starPosition === rating) {
      return <StarIcon
          offset={svgOffset}
          fill={redColor}
          style={customStarStyle}
      />;
    } else if (!isInteger &&
        (starPosition > rating && starPosition - 1 === Math.trunc(rating))) {
      return <StarIcon
          halfFilled={true}
          style={customStarStyle}
      />;
    } else {
      return <StarIcon
          fill={grayColor}
          style={customStarStyle}
      />;
    }
  }

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i < 6; i++) {
      stars.push(
          <Fragment key={i}>
            {fillingTheStart(i)}
          </Fragment>,
      );
    }
    return stars;
  };

  return (
      <div className={styles.starsWidget}>
        {renderStars()}
      </div>
  );
};

export default RatingStarWidget;
