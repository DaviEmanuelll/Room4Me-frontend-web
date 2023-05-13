import { HomePage } from 'pages/HomePage';
import { RouteObject } from 'react-router';
import { routesAddresses } from './routesAddresses';
import { LoginPage } from 'pages/LoginPage';
import { Register } from 'pages/Register';
import { SearchPage } from 'pages/SearchPage';

const loginPage: RouteObject = {
  path: routesAddresses.loginPage,
  element: <LoginPage />,
};
const register: RouteObject = {
  path: routesAddresses.register,
  element: <Register />,
};
const homePage: RouteObject = {
  path: routesAddresses.homePage,
  element: <HomePage />,
};
const searchPage: RouteObject = {
  path: routesAddresses.searchPage,
  element: <SearchPage />,
};

export default [homePage, loginPage, register, searchPage];
