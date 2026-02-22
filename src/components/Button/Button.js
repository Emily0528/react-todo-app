import styles from './Button.module.scss';

const TextInput = props => {
    return <button className={styles.button} placeholder={props.placeholder} type="text">Search</button>
}

export default TextInput;