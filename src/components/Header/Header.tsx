import { FC } from 'react';
import BellIcon from '../../icons/BellIcon';
import { Badge, Box, List, ListItem, Typography } from '@mui/material';
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
    <Box
      mt={'42px'}
      sx={{
        width: '358px',
      }}
    >
      <List
        disablePadding
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <ListItem
          disablePadding
          sx={{
            width: 'auto',
          }}
        >
          <Avatar
            alt={userData.name}
            src={userData.photo}
            variant="square"
            sx={{ width: 43, height: 43 }}
          />
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            width: 'auto',
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontWeight: '500', fontSize: '24px', lineHeight: '28px' }}
          >
            {getRouteNameByPath(pathname)}
          </Typography>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            width: 'auto',
          }}
        >
          <Badge
            color="warning"
            overlap="circular"
            badgeContent=" "
            variant="dot"
            sx={{ '& .MuiBadge-badge': { width: '10px', height: '10px' } }}
          >
            <BellIcon />
          </Badge>
        </ListItem>
      </List>
    </Box>
  );
};

export default Header;
