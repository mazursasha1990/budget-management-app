import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import AddPage from './pages/AddPage';
import CalendarPage from './pages/CalendarPage';
import SettingsPage from './pages/SettingsPage';
import Layout from './components/Layout';
import { routerConstants } from './shared/constants/routes';

const { HOME, EXPENSES, ADD, CALENDAR, SETTINGS } = routerConstants;

const router = createBrowserRouter([
  {
    path: `${HOME.path}`,
    element: <Layout />,
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
  return <RouterProvider router={router} />;
};

export default App;
