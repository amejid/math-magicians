import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => (
  <header className={styles.header}>
    <NavLink className={styles.header__title} to="/">
      Math Magicians
    </NavLink>
    <nav className={styles.nav}>
      <ul className={styles['nav-links']}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.active}` : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calculator"
            className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/quote" className={({ isActive }) => (isActive ? `${styles.active}` : '')}>
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
