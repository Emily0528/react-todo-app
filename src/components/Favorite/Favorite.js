import styles from './Favorite.module.scss';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getAllCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';
import { Navigate } from 'react-router';

const Favorite = () => {
  /*
  const favoriteCards = useSelector(state =>
    getAllCards(state).filter(card => card.isFavorite)
  );*/

  const favoriteCards = useSelector(state => {
  const all = getAllCards(state);
  const fav = all.filter(card => card.isFavorite);
  //console.log('FAVORITE CARDS:', fav);
  return fav;
});

  if (favoriteCards.length === 0) return <Navigate to="/" />;
  return (
    <Container className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.listLink}>
        {favoriteCards.map(card => (
          <Card 
            key={card.id} 
            id={card.id} 
            title={card.title} 
            isFavorite={card.isFavorite} 
          />
        ))}
      </div>
    </Container>
  );
};

export default Favorite;