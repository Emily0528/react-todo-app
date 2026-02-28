import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title) return;
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
        <div className={styles.field}>
            <label className={styles.label}>
                Title:
            </label>
            <input className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.label}>
                Description:
            </label>
            <input className={styles.input} type="text" value={description} onChange={e => setDescription(e.target.value)} /> 
        </div>
      <Button>Add column</Button>
    </form>
  );
};

export default ListForm;