import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
//import { toggleFavoriteCard } from '../../redux/store';
import { toggleFavoriteCard } from '../../redux/actions';
import clsx from 'clsx';


const Card = ({ id, title, isFavorite  }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavoriteCard(id));
  };

  return (
    <div className={styles.card}>
      <span>{title}</span>
      <span
        className={clsx(styles.favoriteIcon, isFavorite && styles.favoriteActive)}
        onClick={handleFavorite}
      >
        <FontAwesomeIcon icon={faStarEmpty} />
      </span>
    </div>
  );
};

export default Card;