import { HomePage } from 'pages/HomePage';
import { RouteObject } from 'react-router';
import { routesAddresses } from './routesAddresses';

const homePage: RouteObject = {
  path: routesAddresses.homePage,
  element: <HomePage />,
};

export default [homePage];
