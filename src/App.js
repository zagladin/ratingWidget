import React from 'react';
import styles from './App.module.scss';
import RatingStarWidget from './Components/RatingStarWidget/RatingStarWidget';

function App() {

  const [rating, setRating] = React.useState(1);

  const handleChange = (e) => setRating(e.target.value);

  return (
      <div className={styles.wrapper}>
        <div className={styles.inputBlock}>
          <label htmlFor={'rating'}>Enter the rating</label>
          <input id={'rating'}
                 defaultValue={rating}
                 onChange={handleChange}
                 type={'number'}
                 min={0}
                 max={5}
                 step={0.1}
          />
        </div>
        <div className={styles.ratingBlock}>
          <RatingStarWidget rating={rating}/>
        </div>
      </div>
  );
}

export default App;
