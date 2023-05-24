import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { routerConstants } from '../../shared/constants/routes';
import HomeIcon from '../../assets/icons/HomeIcon';
import CardIcon from '../../assets/icons/CardIcon';
import AddIcon from '../../assets/icons/AddIcon';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import SettingsIcon from '../../assets/icons/SettingsIcon';

import styles from './NavBar.module.css';

const {
  HOME: { path: homePath },
  EXPENSES: { path: expensesPath },
  ADD: { path: addPath },
  CALENDAR: { path: calendarPath },
  SETTINGS: { path: settingsPath },
} = routerConstants;

const NavBar: FC = () => {
  const { pathname } = useLocation();
  const orange = '#FF643B';
  const lightGrey = '#A3A3A3';

  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li>
          <NavLink to={homePath}>
            <HomeIcon
              sx={{ color: homePath === pathname ? orange : lightGrey }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to={expensesPath}>
            <CardIcon
              sx={{ color: expensesPath === pathname ? orange : lightGrey }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to={addPath}>
            <AddIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to={calendarPath}>
            <CalendarIcon
              sx={{
                stroke: calendarPath === pathname ? orange : lightGrey,
              }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to={settingsPath}>
            <SettingsIcon
              sx={{
                stroke: settingsPath === pathname ? orange : lightGrey,
              }}
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
