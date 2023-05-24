import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import AddPage from './pages/AddPage';
import CalendarPage from './pages/CalendarPage';
import SettingsPage from './pages/SettingsPage';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout/Layout';
import { routerConstants } from './shared/constants/routes';

const { HOME, EXPENSES, ADD, CALENDAR, SETTINGS } = routerConstants;

const router = createBrowserRouter([
  {
    path: `${HOME.path}`,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: `${EXPENSES.path}`,
        element: <ExpensesPage />,
      },
      {
        path: `${ADD.path}`,
        element: <AddPage />,
      },
      {
        path: `${CALENDAR.path}`,
        element: <CalendarPage />,
      },
      {
        path: `${SETTINGS.path}`,
        element: <SettingsPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
};

export default App;
