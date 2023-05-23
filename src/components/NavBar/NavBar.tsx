import { NavLink } from 'react-router-dom';
import { routerConstants } from '../../shared/constants/routes';
import HomeIcon from '../../assets/icons/HomeIcon';
import CardIcon from '../../assets/icons/CardIcon';
import AddIcon from '../../assets/icons/AddIcon';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import SettingsIcon from '../../assets/icons/SettingsIcon';

import styles from './NavBar.module.css';

const { HOME, EXPENSES, ADD, CALENDAR, SETTINGS } = routerConstants;

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li>
          <NavLink to={HOME.path}>
            <HomeIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to={EXPENSES.path}>
            <CardIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to={ADD.path}>
            <AddIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to={CALENDAR.path}>
            <CalendarIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to={SETTINGS.path}>
            <SettingsIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
