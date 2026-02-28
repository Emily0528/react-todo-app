import styles from './Favorite.module.scss';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getAllCards } from '../../redux/store';
import Card from '../Card/Card';
import { Navigate } from 'react-router';

const Favorite = () => {
  const favoriteCards = useSelector(state =>
    getAllCards(state).filter(card => card.isFavorite)
  );

  if (favoriteCards.length === 0) return <Navigate to="/" />;
  return (
    <Container>
      <PageTitle>Favorite</PageTitle>
      <p>Here you can find your favorite cards.</p>
      <div lassName={styles.favorite}>
        {favoriteCards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </Container>
  );
};

export default Favorite;