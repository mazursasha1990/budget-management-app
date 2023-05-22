import { NavLink } from 'react-router-dom';
import { routerConstants } from '../../shared/constants/routes';

const { HOME, EXPENSES, ADD, CALENDAR, SETTINGS } = routerConstants;

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={HOME.path}>{HOME.name}</NavLink>
          </li>
          <li>
            <NavLink to={EXPENSES.path}>{EXPENSES.name}</NavLink>
          </li>
          <li>
            <NavLink to={ADD.path}>{ADD.name}</NavLink>
          </li>
          <li>
            <NavLink to={CALENDAR.path}>{CALENDAR.name}</NavLink>
          </li>
          <li>
            <NavLink to={SETTINGS.path}>{SETTINGS.name}</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
