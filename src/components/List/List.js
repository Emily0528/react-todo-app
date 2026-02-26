import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns, getAllLists } from '../../redux/store';

const List = () => {

  const list = useSelector(state =>
    getAllLists(state).find(list => list.id === 1)
  );

  const columns = useSelector(state =>
    getAllColumns(state).filter(column => column.listId === 1)
  );

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {list.title}
        </h2>
      </header>

      <p className={styles.description}>
        {list.description}
      </p>

      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column}
          />
        )}
      </section>

      <ColumnForm />
    </div>
  );
};

export default List;