import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.navList}>
        <li>
          <NavLink
            to="/"
            className={css.navLink}
            activeClassName={css.activeLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={css.navLink}
            activeClassName={css.activeLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
