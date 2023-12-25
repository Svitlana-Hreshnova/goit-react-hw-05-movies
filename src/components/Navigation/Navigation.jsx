import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.navList}>
        <li>
          <Link to="/" className={css.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" className={css.navLink}>
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
