import { NavLink } from 'react-router-dom';
import { routerConstants } from '../../shared/constants/routes';
import HomeIcon from '../../assets/icons/HomeIcon';
import CardIcon from '../../assets/icons/CardIcon';
import AddIcon from '../../assets/icons/AddIcon';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import SettingsIcon from '../../assets/icons/SettingsIcon';

const { HOME, EXPENSES, ADD, CALENDAR, SETTINGS } = routerConstants;

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
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
    </div>
  );
};

export default NavBar;
