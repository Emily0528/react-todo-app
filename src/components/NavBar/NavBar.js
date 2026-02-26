import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <Container className={styles.navContent}>
            <Link to="/" className={styles.logo}>
                <FontAwesomeIcon icon={faTasks} />
            </Link>

            <ul className={styles.navList}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorite">Favorite</Link></li>
                 <li><Link to="/about">About</Link></li>
            </ul>
        </Container>
    </nav>
  );
};

export default NavBar;