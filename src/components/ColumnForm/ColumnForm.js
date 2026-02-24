import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit  = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
};

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <div className={styles.field}>
            <label className={styles.label}>
                Title:
            </label>
            <input className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.label}>
                Icon:
            </label>
            <input className={styles.input} type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            </div>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;