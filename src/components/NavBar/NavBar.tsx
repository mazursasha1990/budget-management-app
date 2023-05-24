import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { routerConstants } from '../../shared/constants/routes';
import HomeIcon from '../../icons/HomeIcon';
import CardIcon from '../../icons/CardIcon';
import CalendarIcon from '../../icons/CalendarIcon';
import SettingsIcon from '../../icons/SettingsIcon';
import AddIcon from '@mui/icons-material/Add';

import { Box, Fab, List, ListItem } from '@mui/material';

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
    <Box
      sx={{
        width: '358px',
      }}
    >
      <nav aria-label="navigation">
        <List
          disablePadding
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // width: 'auto',
          }}
        >
          <ListItem
            disablePadding
            sx={{
              width: 'auto',
            }}
          >
            <NavLink to={homePath}>
              <HomeIcon
                sx={{ color: homePath === pathname ? orange : lightGrey }}
              />
            </NavLink>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              width: 'auto',
            }}
          >
            <NavLink to={expensesPath}>
              <CardIcon
                sx={{
                  color: expensesPath === pathname ? orange : lightGrey,
                }}
              />
            </NavLink>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              width: 'auto',
            }}
          >
            <NavLink to={addPath}>
              <Fab color="warning" aria-label="add">
                <AddIcon />
              </Fab>
            </NavLink>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              width: 'auto',
            }}
          >
            <NavLink to={calendarPath}>
              <CalendarIcon
                sx={{
                  stroke: calendarPath === pathname ? orange : lightGrey,
                }}
              />
            </NavLink>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              width: 'auto',
            }}
          >
            <NavLink to={settingsPath}>
              <SettingsIcon
                sx={{
                  stroke: settingsPath === pathname ? orange : lightGrey,
                }}
              />
            </NavLink>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default NavBar;
