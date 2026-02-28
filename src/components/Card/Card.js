import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleFavoriteCard, removeCard  } from '../../redux/cardsRedux';
import clsx from 'clsx';


const Card = ({ id, title, isFavorite  }) => {
  //console.log('Card id:', id);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavoriteCard(id));
  };

  const handleRemove = () => {
    dispatch(removeCard(id));
  };

  return (
    <div className={styles.card}>
      <span>{title}</span>
      <div className={styles.actions}>
        <span
          className={clsx(styles.favoriteIcon, isFavorite && styles.favoriteActive)}
          onClick={handleFavorite}
        >
          <FontAwesomeIcon icon={faStarEmpty} />
        </span>
        <span
          className={styles.deleteIcon}
          onClick={handleRemove}
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </div>
    </div>
  );
};

export default Card;