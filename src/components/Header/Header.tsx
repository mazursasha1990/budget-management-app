import { FC } from 'react';
import BellIcon from '../../assets/icons/BellIcon';
import styles from './Header.module.css';
import Avatar from '@mui/material/Avatar';
import { useLocation } from 'react-router-dom';
import { routerConstants } from '../../shared/constants/routes';
import { userData } from '../../mocks/userData';

const Header: FC = () => {
  const { pathname } = useLocation();

  const getRouteNameByPath = (path: string): string | null => {
    const matchingRoute = Object.values(routerConstants).find(
      (route) => route.path === path
    );

    if (matchingRoute) {
      return matchingRoute.name;
    }

    return null;
  };

  return (
    <div className={styles.header}>
      <Avatar
        alt={userData.name}
        src={userData.photo}
        variant="square"
        sx={{ width: 43, height: 43 }}
      />
      <h1 className={styles.headerName}>{getRouteNameByPath(pathname)}</h1>
      <BellIcon />
    </div>
  );
};

export default Header;
