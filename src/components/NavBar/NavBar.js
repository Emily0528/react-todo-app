import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <Container className={styles.navContent}>
            <NavLink to="/" className={styles.logo}>
                <FontAwesomeIcon icon={faTasks} />
            </NavLink>

            <ul className={styles.navList}>
                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/favorite">
                        Favorite
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </Container>
    </nav>
  );
};

export default NavBar;