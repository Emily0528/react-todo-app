import { useSelector } from 'react-redux';
import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { getFilteredCards } from '../../redux/store';

const Column = props => {

  const cards = useSelector(state => getFilteredCards(state, props.id));
  //console.log('Column render');
  
  return (
        <article className={styles.column}>
          <h2 className={styles.title}>
            <span className={styles.icon + ' fa fa-' + props.icon} />
            {props.title}
          </h2>
          <div className={styles.cards}>
            {cards.map(card => (
              <Card 
                key={card.id} 
                id={card.id} 
                title={card.title} 
                isFavorite={card.isFavorite} 
              />
            ))}
          </div>
          <CardForm columnId={props.id} />
        </article>
  );
};

export default Column;