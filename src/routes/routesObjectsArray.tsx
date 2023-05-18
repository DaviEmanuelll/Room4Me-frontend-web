import { HomePage } from 'pages/HomePage';
import { RouteObject } from 'react-router';
import { routesAddresses } from './routesAddresses';
import { LoginPage } from 'pages/LoginPage';
import { Register } from 'pages/Register';
import { SearchPage } from 'pages/SearchPage';
import { AnnouncePage } from 'pages/AnnouncePage';
import { RoomDetails } from 'pages/RoomDetails';

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

const announcePage: RouteObject = {
  path: routesAddresses.announcePage,
  element: <AnnouncePage />,
};

const roomDetails: RouteObject = {
  path: routesAddresses.roomDetails,
  element: <RoomDetails />,
};

export default [
  homePage,
  loginPage,
  register,
  searchPage,
  announcePage,
  roomDetails,
];
