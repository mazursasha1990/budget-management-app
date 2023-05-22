import { NavLink } from 'react-router-dom';
import { routerConstants } from '../../shared/constants/routes';

const { HOME } = routerConstants;

const ErrorPage = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <h3>Something wen wrong </h3>
      <NavLink to={HOME.path}>Back to {HOME.name}</NavLink>
    </div>
  );
};

export default ErrorPage;
