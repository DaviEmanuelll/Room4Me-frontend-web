import { HomePage } from 'pages/HomePage';
import { RouteObject } from 'react-router';
import { routesAddresses } from './routesAddresses';
import { LoginPage } from 'pages/LoginPage';
import { StepOneRegister } from 'pages/StepOneRegister';
import { StepTwoRegister } from 'pages/StepTwoRegister';

const homePage: RouteObject = {
  path: routesAddresses.homePage,
  element: <HomePage />,
};

const loginPage: RouteObject = {
  path: routesAddresses.loginPage,
  element: <LoginPage />,
};
const stepOneRegister: RouteObject = {
  path: routesAddresses.stepOneRegister,
  element: <StepOneRegister />,
};
const stepTwoRegister: RouteObject = {
  path: routesAddresses.stepTwoRegister,
  element: <StepTwoRegister />,
};

export default [homePage, loginPage, stepOneRegister, stepTwoRegister];
